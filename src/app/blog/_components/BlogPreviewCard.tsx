import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  title: string;
  summary: string;
};
export const BlogPreviewCard = (props: Props) => {
  const { title = '', summary = '' } = props;

  return (
    <Card className=' h-48 w-96'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-3 text-slate-500'>{summary}</p>
      </CardContent>
    </Card>
  );
};
