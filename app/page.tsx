// app/page.tsx — root redirect to /en
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en');
}
