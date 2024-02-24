'use client';

import { useRouter } from 'next/navigation';
import { GradientButton } from '../base/gradient-button';
import { Button } from '../base/button';
import { pathname } from '@/constants/path';
import { IntroductServiceImageCarousel } from './introduct-service-image-carousel';

export function Start21Planet() {
  const route = useRouter();

  const handle21PlanetStartButtonClick = () => {
    route.push(pathname.SIGN_UP);
  };

  const handleLoginButtonClick = () => {
    route.push(pathname.LOGIN);
  };

  return (
    <>
      <IntroductServiceImageCarousel />
      <GradientButton
        variant="gradient"
        size="large"
        className="w-full mt-9"
        onClick={handle21PlanetStartButtonClick}
      >
        시작하기
      </GradientButton>
      <div className="flex items-center gap-2 justify-center">
        <span className="text-s_light text-white-0.5">이미 계정이 있나요?</span>
        <Button variant="text" size="middle" onClick={handleLoginButtonClick}>
          로그인
        </Button>
      </div>
    </>
  );
}
