import { Syncopate } from 'next/font/google';
import { Start21Planet } from '@/components/work-through/start-21-planet';
import clsx from 'clsx';

const syncopate = Syncopate({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className="w-full h-full px-6 flex flex-col items-center justify-center h-full">
      <h1
        className={clsx(
          'text-white-0.9 text-xxxl_medium sha shadow-[#CECEFD] [text-shadow:_0_0_10px_#CECEFD]',
          syncopate.className
        )}
      >
        21 planet
      </h1>
      <Start21Planet />
    </main>
  );
}
