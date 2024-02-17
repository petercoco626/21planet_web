import { ChallengeCheck } from '@/types/api/challenge-check';
import { useCheckDateOnChallenge } from '@/hooks/api/challenge-check';
import clsx from 'clsx';
import IcCheck from '@/assets/icon/ic-check.svg';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';

interface ChallengeDateCardProps {
  checkedChallenge: ChallengeCheck | null;
  canCheckToday: boolean;
  challengeId: string;
  sequence: number;
}

export function ChallengeDateCard({
  checkedChallenge,
  canCheckToday,
  challengeId,
  sequence,
}: ChallengeDateCardProps) {
  const route = useRouter();

  const { mutateAsync: checkChallengeSequenceMutate } = useCheckDateOnChallenge(
    {
      challengeId,
      sequence,
    }
  );

  const handleCheckToday = async () => {
    await checkChallengeSequenceMutate();
  };

  const handleRouteChekcedDateDetail = (challengeCheckId: string) => {
    route.push(
      pathname.COMMENT_CHALLENGE + `/${challengeId}` + `/${challengeCheckId}`
    );
  };

  if (checkedChallenge === null && !canCheckToday) {
    return (
      <div
        className={clsx(
          'w-[80px] h-[80px] rounded-full flex items-center justify-center',
          'bg-white-0.15',
          'text-white-0.5 text-xl_light'
        )}
      >
        {sequence}
      </div>
    );
  }

  if (checkedChallenge === null && canCheckToday) {
    return (
      <button
        type="button"
        onClick={handleCheckToday}
        className={clsx(
          'w-[80px] h-[80px] rounded-full flex items-center justify-center',
          'bg-violet-500'
        )}
      >
        <IcCheck width={24} height={24} />
      </button>
    );
  }

  if (checkedChallenge === null) return null;

  return (
    <button
      type="button"
      onClick={() => handleRouteChekcedDateDetail(checkedChallenge.id)}
    >
      <img
        className="w-[80px] h-[80px] rounded-full cursor-pointer"
        src={checkedChallenge.planet.url}
        alt="21planet_planet"
      />
    </button>
  );
}
