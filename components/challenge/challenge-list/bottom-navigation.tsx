'use client';

import { Toast } from '@/components/base/toast';
import { pathname } from '@/constants/path';
import { useChallengeList } from '@/hooks/api/challenge';
import { useToggle } from '@/hooks/use-toggle';
import { useRouter } from 'next/navigation';
import IcPlanet from '@/assets/icon/ic-planet.svg';
import IcMedal from '@/assets/icon/ic-medal.svg';
import IcPlus from '@/assets/icon/ic-plus.svg';
import clsx from 'clsx';

export function BottomNavigation() {
  const { data: challengeList } = useChallengeList();

  const route = useRouter();

  const { handleToggleOn, toggle, handleToggleOff } = useToggle();

  const handleRouteHomeScreen = () => {
    route.push(pathname.CHALLENGE);
  };
  const handleRouteCreateChallengeScreen = () => {
    // if (challengeList?.data.length === 3) {
    //   handleToggleOn();
    //   return;
    // }

    route.push(pathname.CREATE_CHALLENGE);
  };
  const handleRouteBadgeScreen = () => {
    route.push(pathname.BADGE);
  };

  return (
    <div className="w-full absolute bottom-0 z-10 ">
      <Toast
        message="3개 이상은 만들 수 없어요!"
        classname="mb-10"
        isToastOn={toggle}
        onToastOff={handleToggleOff}
      />
      <div
        className={clsx(
          'bg-[#322e4d99] w-full h-14 flex flex-row items-center justify-between px-16 pt-1 box-border rounded-t-3xl',
          'border-t-[1px] border-x-[1px] border-[#7a739999]',
          'backdrop-blur'
        )}
      >
        <button onClick={handleRouteHomeScreen}>
          <div className="w-1 h-1 rounded-full bg-white-0.9 mb-[2px] mx-auto" />
          <IcPlanet />
        </button>

        <button onClick={handleRouteBadgeScreen}>
          <div className="w-1 h-1 rounded-full bg-white-0.9 mb-[2px] mx-auto" />
          <IcMedal />
        </button>
      </div>
      <button
        className="w-14 h-14 rounded-full bottom-7 absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
        type="button"
        onClick={handleRouteCreateChallengeScreen}
        style={{
          background: 'linear-gradient(93deg, #5A49BF 15.57%, #B069D1 83.39%)',
        }}
      >
        <IcPlus />
      </button>
    </div>
  );
}
