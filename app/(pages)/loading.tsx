'use client';

import NebulaAnimation from '@/assets/lottie/nebula.json';
import Lottie from 'lottie-react';

export default function Loading() {
  return (
    <main className="w-full h-full flex items-center justify-center relative">
      <div className="w-[100px] h-[100px]">
        <Lottie animationData={NebulaAnimation} />;
      </div>
    </main>
  );
}
