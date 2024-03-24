import { BlogPreviewCard } from '@/app/blog/_components/BlogPreviewCard';

const dummy: {
  id: string;
  title: string;
  summary: string;
}[] = [];
for (let i = 0; i < 20; i++) {
  dummy.push({
    id: i.toString(),
    title: '今日の天気予報' + i,
    summary: 'どちらかというと明日の天気予報の方が気になることありますよね',
  });
}

const BlogPost = () => {
  return (
    <div className='flex size-full flex-col place-content-center place-items-center items-center gap-10'>
      {dummy.map((dummy) => {
        return <BlogPreviewCard key={dummy.id} id={dummy.id} title={dummy.title} summary={dummy.summary} />;
      })}
    </div>
  );
};

export default BlogPost;
