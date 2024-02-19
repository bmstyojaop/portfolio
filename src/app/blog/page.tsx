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
    <div className='grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] place-items-center gap-10 bg-slate-100'>
      {dummy.map((dummy) => {
        return <BlogPreviewCard key={dummy.key} title={dummy.title} summary={dummy.summary} />;
      })}
    </div>
  );
};

export default BlogPost;
