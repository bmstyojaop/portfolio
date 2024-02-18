import { BlogPreviewCard } from '@/app/blog/_components/BlogPreviewCard';

const dummy: {
  key: string;
  title: string;
  summary: string;
}[] = [];
for (let i = 0; i < 20; i++) {
  dummy.push({
    key: i.toString(),
    title: '今日の天気予報' + i,
    summary: 'どちらかというと明日の天気予報の方が気になることありますよね',
  });
}

const BlogPost = () => {
  return (
    <main className='grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] place-items-center gap-4'>
      {dummy.map((dummy) => {
        return <BlogPreviewCard key={dummy.key} title={dummy.title} summary={dummy.summary} />;
      })}
    </main>
  );
};

export default BlogPost;
