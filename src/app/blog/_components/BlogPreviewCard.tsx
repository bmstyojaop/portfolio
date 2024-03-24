import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  summary: string;
};
export const BlogPreviewCard = (props: Props) => {
  const { title = '', summary = '' } = props;

  return (
    <Link href='/blog/:id'>
      <Card className='h-48 w-full max-w-screen-sm bg-white'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='line-clamp-3  text-slate-500 '>{summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
