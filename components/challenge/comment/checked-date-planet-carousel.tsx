import { ChallengeCheck } from '@/types/api/challenge-check';
import clsx from 'clsx';

interface CheckedDateInfoProps {
  challengeChecks: ChallengeCheck[];
  onChangePageIndex: (newPage: number) => void;
}

export function CheckedDatePlanetCarousel({
  challengeChecks,
  onChangePageIndex,
}: CheckedDateInfoProps) {
  return (
    <div className="mb-6 overflow-hidden">
      <div className="flex overflow-x-scroll scrollbar-none">
        {challengeChecks.map((planetInfo) => (
          <Planet imageUrl={planetInfo.planet.url} key={planetInfo.id} />
        ))}
      </div>
    </div>
  );
}

function Planet({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex flex-row justify-center w-full">
      <img className={clsx('w-[180px] h-[180px]')} src={imageUrl} />
    </div>
  );
}
