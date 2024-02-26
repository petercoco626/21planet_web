'use client';

import { Challenge } from '@/types/api/challenge';
import { changeDateFormatYYMMDD } from '@/libs/utils';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';

export const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const route = useRouter();

  const handleRouteDetailChallengeScreen = () => {
    route.push(pathname.DETAIL_CAHLLENGE + `/${challenge.id}`);
  };

  return (
    <button
      className="rounded-xl  border-[1px] border-white-0.15 w-full  mb-3 backdrop-blur overflow-hidden"
      onClick={handleRouteDetailChallengeScreen}
      style={{
        background:
          'linear-gradient(115deg,rgba(122,115,153,0.6) 0%, rgba(50,46,77,0.0) 98.94%)',
      }}
    >
      <div className="flex p-6 box-border gap-[10px]">
        <CurrentPlanetOrBadgeStatus
          badge={null}
          currentPlanet={challenge.currentPlanet}
        />
        <div className="flex flex-col items-start">
          <span className="bg-gray-600 px-[6px] py-[2px] rounded-xl mb-1 text-white-0.9 text-xs_light">
            {challenge.checkedDateListLength < 21
              ? `${challenge.checkedDateListLength}일 째`
              : '성공'}
          </span>
          <div className="text-white text-xl_extrabold mb-1">
            {challenge.title}
          </div>
          <div className="text-white-0.5 text-xs_thin">
            {changeDateFormatYYMMDD(new Date(challenge.startDate))} ~{' '}
            {challenge.endDate
              ? changeDateFormatYYMMDD(new Date(challenge.endDate))
              : null}
          </div>
        </div>
      </div>
    </button>
  );
};

function CurrentPlanetOrBadgeStatus({
  badge,
  currentPlanet,
}: {
  badge: string | null;
  currentPlanet: string | null;
}) {
  if (badge)
    return (
      <img
        className="w-[60px] h-[60px] rounded-full mr-2"
        src={badge}
        alt="21planet_planet"
      />
    );

  if (currentPlanet)
    return (
      <img
        className="w-[60px] h-[60px] rounded-full mr-2"
        src={currentPlanet}
        alt="21planet_planet"
      />
    );

  return <div className="w-[60px] h-[60px] rounded-full mr-2 bg-white-0.5" />;
}
