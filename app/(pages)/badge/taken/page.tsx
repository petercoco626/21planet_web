import { TakenBadge } from '@/components/badge/taken/taken-badge';
import IcX from '@/assets/icon/ic-X.svg';
import Link from 'next/link';
import { pathname } from '@/constants/path';

export default function TakenBadgePage() {
  return (
    <main className="w-full h-full">
      <div className="px-4 py-2 flex justify-end items-center">
        <Link href={pathname.CHALLENGE}>
          <IcX />
        </Link>
      </div>
      <div className="mt-8 mb-6 text-center">
        <h2 className="text-xxl_light text-white-0.7 mb-2">
          목표 달성을 축하드려요!
        </h2>
        <p className="text-s_light text-white-0.5">
          달성 기념으로 배지를 드릴게요.
          <br />
          앞으로도 21planet과 함께 꾸준한 습관 형성을 해봐요.
        </p>
      </div>
      <TakenBadge />
    </main>
  );
}
