'use client';

import { useRouter } from 'next/navigation';
import IcX from '@/assets/icon/ic-X.svg';

export function CreateChallengeHeader() {
  const route = useRouter();

  const handleXButtonClick = () => {
    route.back();
  };

  return (
    <div className="px-6 w-full h-14 py-2 box-border flex justify-end">
      <button
        type="button"
        onClick={handleXButtonClick}
        className="w-10 h-10 flex items-center justify-center"
      >
        <IcX />
      </button>
    </div>
  );
}
