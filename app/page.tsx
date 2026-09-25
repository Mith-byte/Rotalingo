import { redirect } from 'next/navigation';

// Root: detect browser language, redirect to best locale
export default function RootPage() {
  // For MVP, always redirect to /en landing page.
  // In production, could detect Accept-Language header server-side.
  redirect('/en');
}
