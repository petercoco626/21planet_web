import { ChallengeCheck } from '@/types/api/challenge-check';
import { useCheckDateOnChallenge } from '@/hooks/api/challenge-check';
import clsx from 'clsx';
import IcCheck from '@/assets/icon/ic-check.svg';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';
import { CheckedChallengeDateInfoModal } from './checked-challenge-date-info-modal';
import { useToggle } from '@/hooks/use-toggle';
import { useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();

  const route = useRouter();

  const { toggle, handleToggleOn, handleToggleOff } = useToggle();

  const { mutateAsync: checkChallengeSequenceMutate } = useCheckDateOnChallenge(
    {
      challengeId,
      sequence,
    }
  );

  const handleCheckToday = async () => {
    await checkChallengeSequenceMutate(undefined, {
      onSuccess: () => {
        handleToggleOn();
        if (sequence === 21)
          queryClient.refetchQueries({
            queryKey: ['badges', 'counts'],
          });
      },
    });
  };

  const handleRouteChekcedDateDetail = () => {
    route.push(pathname.COMMENT_CHALLENGE + `/${challengeId}`);
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
    <>
      <button type="button" onClick={() => handleRouteChekcedDateDetail()}>
        <img
          className="w-[80px] h-[80px] rounded-full cursor-pointer"
          src={checkedChallenge.planet.url}
          alt="21planet_planet"
        />
      </button>
      <CheckedChallengeDateInfoModal
        checkedChallenge={checkedChallenge}
        isModalOpen={toggle}
        onClose={handleToggleOff}
      />
    </>
  );
}
