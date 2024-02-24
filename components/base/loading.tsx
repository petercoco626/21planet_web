'use client';

import NebulaAnimation from '@/assets/lottie/nebula.json';
import dynamic from 'next/dynamic';
import { Modal } from './modal';

const Lottie = dynamic(() => import('lottie-react'));

export function Loading() {
  return (
    <Modal isOpen>
      <div className="w-[100px] h-[100px]">
        <Lottie animationData={NebulaAnimation} />;
      </div>
    </Modal>
  );
}
