'use client';

import {
  useChallenge,
  useChallengeChecksOnChallengeId,
} from '@/hooks/api/challenge';
import { ChallengeDateCard } from './challenge-date-card';
import { canCheckDateOnChallenge } from '@/libs/utils';

export function ChallengeDataCardList({
  challengeId,
}: {
  challengeId: string;
}) {
  const { data: challengeInfo } = useChallenge(challengeId);

  const { data: challengeCheckList } =
    useChallengeChecksOnChallengeId(challengeId);

  if (!challengeInfo || !challengeCheckList) return null;

  const checkedDateList = challengeCheckList.data.filter(
    (checkedData) => checkedData !== null
  );

  const lastChekcedDate: Date | null =
    checkedDateList.length > 0
      ? checkedDateList[checkedDateList.length - 1].checkedAt
      : null;

  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="max-w-[272px] grid grid-cols-3 mx-auto gap-4">
        {challengeCheckList.data.map((checkList, index) => (
          <ChallengeDateCard
            checkedChallenge={checkList}
            canCheckToday={canCheckDateOnChallenge(
              checkedDateList.length,
              index,
              lastChekcedDate
            )}
            sequence={index + 1}
            challengeId={challengeId}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
