'use client';

import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';
import { GradientButton } from '../../base/gradient-button';

export function GoTravelButton() {
  const route = useRouter();

  const handleGoTravelButtonClick = () => {
    route.push(pathname.CREATE_CHALLENGE);
  };

  return (
    <GradientButton
      size="large"
      variant="gradient"
      onClick={handleGoTravelButtonClick}
    >
      여행 출발!
    </GradientButton>
  );
}
