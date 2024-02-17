'use client';

import { useRouter } from 'next/navigation';
import { GoBackButton } from '../common/go-back-button';
import { pathname } from '@/constants/path';

export function LoginHeader() {
  const route = useRouter();

  const handleGoBackButtonClick = () => {
    route.push(pathname.WORK_THROUGH);
  };

  return (
    <div className="w-full h-14 py-2 box-border mb-8">
      <GoBackButton onClickGobackButton={handleGoBackButtonClick} />
    </div>
  );
}
