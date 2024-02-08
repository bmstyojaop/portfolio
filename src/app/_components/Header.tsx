import Image from 'next/image';

export const Header = () => {
  return (
    <header className='flex h-10 justify-center border border-blue-300 bg-blue-50 px-3'>
      <div className='size-full max-w-screen-xl bg-slate-200'>
        <div className='relative size-full'>
          <Image src='/logo.png' alt='logo' width={36} height={36} />
        </div>
        <div></div>
      </div>
    </header>
  );
};
