import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { createServerClient } from '@supabase/ssr';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Get intl response first (handles localized routing/redirects)
  const response = intlMiddleware(request);

  // 2. Set up Supabase with the response cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 3. Get user auth state
  const { data: { user } } = await supabase.auth.getUser();

  // 4. Identify the path without the locale prefix
  const locales = routing.locales;
  let pathWithoutLocale = pathname;
  let currentLocale = routing.defaultLocale;

  for (const loc of locales) {
    if (pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)) {
      currentLocale = loc;
      pathWithoutLocale = pathname.replace(`/${loc}`, '') || '/';
      break;
    }
  }

  // Define our protected and public routes
  const isDashboardOrLesson = pathWithoutLocale.startsWith('/dashboard') || pathWithoutLocale.startsWith('/lesson');
  const isAuthPage = pathWithoutLocale.startsWith('/login') || pathWithoutLocale.startsWith('/register');
  const isLandingPage = pathWithoutLocale === '/';

  // 5. Apply redirection logic
  if (!user && isDashboardOrLesson) {
    // Unauthenticated user trying to access protected route -> redirect to login
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLocale}/login`;
    return NextResponse.redirect(url);
  }

  if (user && (isAuthPage || isLandingPage)) {
    // Authenticated user trying to access login/register or landing page -> redirect to dashboard
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLocale}/dashboard`;
    return NextResponse.redirect(url);
  }

  // 6. Return the merged response
  return response;
}

export const config = {
  // Skip all paths that should not be internationalized or protected
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
