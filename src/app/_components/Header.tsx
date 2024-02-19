'use client';
import Image from 'next/image';
import Link from 'next/link';

const navLinks: { label: string; path: string }[] = [
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Work',
    path: '/work',
  },
  {
    label: 'Component',
    path: '/uiCollection',
  },
];
export const Header = () => {
  return (
    // TODO: 背景色をぼかし半透明にする（グラスモーフィズム）
    <header className=' fixed flex size-full  h-12 w-screen justify-between  border bg-gray-200/30 px-3 backdrop-blur-lg'>
      <Link href='/' className='relative flex size-full items-center'>
        <Image src='/logo.png' alt='ロゴ' width={36} height={36} priority />
        <h2 className='font-serif text-3xl'>タス</h2>
      </Link>
      <nav className='hidden size-full sm:block'>
        <ul className='flex h-full justify-around'>
          {navLinks.map((item) => {
            return (
              <li key={item.label} className='flex items-center'>
                <Link href={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='flex size-full items-center justify-end sm:hidden'>
        <button type='button' className='z-10 space-y-2 '>
          <div className='h-0.5 w-8 bg-gray-600' />
          <div className='h-0.5 w-8 bg-gray-600' />
          <div className='h-0.5 w-8 bg-gray-600' />
        </button>
      </div>
      <div className='hidden size-full sm:block'></div>
    </header>
  );
};
