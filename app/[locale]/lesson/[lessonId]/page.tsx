import { notFound } from 'next/navigation';
import { getLessonById } from '@/data/lessons';
import LessonView from '@/components/lesson/LessonView';

interface LessonPageProps {
  params: Promise<{ locale: string; lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { locale, lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) notFound();

  return <LessonView lesson={lesson} locale={locale} />;
}
