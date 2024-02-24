'use client';

import { Toast } from '@/components/base/toast';
import { pathname } from '@/constants/path';
import { useChallengeList } from '@/hooks/api/challenge';
import { useToggle } from '@/hooks/use-toggle';
import { usePathname, useRouter } from 'next/navigation';
import IcPlanet from '@/assets/icon/ic-planet.svg';
import IcMedal from '@/assets/icon/ic-medal.svg';
import IcPlus from '@/assets/icon/ic-plus.svg';
import clsx from 'clsx';

export function BottomNavigation() {
  const { data: challengeList } = useChallengeList();

  const route = useRouter();

  const currentPath = usePathname();

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

  const isChallengePage = currentPath === '/challenge';

  const isBadgePage = currentPath === '/badge';

  return (
    <div className="w-full absolute bottom-10 z-10 px-4 box-border ">
      <Toast
        message="3개 이상은 만들 수 없어요!"
        classname="mb-10"
        isToastOn={toggle}
        onToastOff={handleToggleOff}
      />
      <div
        className={clsx(
          'w-full bg-gray-800 h-16 flex flex-row items-center justify-between px-12 py-2 box-border rounded-3xl',
          'backdrop-blur'
        )}
      >
        <button onClick={handleRouteHomeScreen}>
          <div
            className={clsx(
              'w-1 h-1 rounded-full  mb-[2px] mx-auto',
              isChallengePage ? 'bg-white-0.9' : 'bg-transparent'
            )}
          />
          <IcPlanet
            className={clsx(
              isChallengePage ? 'fill-white-0.9' : 'fill-white-0.15'
            )}
          />
        </button>
        <button
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center'
          )}
          type="button"
          onClick={handleRouteCreateChallengeScreen}
          style={{
            background:
              'linear-gradient(93deg, #5A49BF 15.57%, #B069D1 83.39%)',
            boxShadow: '0px 0px 10px 0px rgba(130, 63, 166, 0.50)',
          }}
        >
          <IcPlus />
        </button>
        <button onClick={handleRouteBadgeScreen}>
          <div
            className={clsx(
              'w-1 h-1 rounded-full  mb-[2px] mx-auto',
              isBadgePage ? 'bg-white-0.9' : 'bg-transparent'
            )}
          />
          <IcMedal
            className={clsx(isBadgePage ? 'fill-white-0.9' : 'fill-white-0.15')}
          />
        </button>
      </div>
    </div>
  );
}
