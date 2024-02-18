'use client';

import { useChallengeList } from '@/hooks/api/challenge';
import { NoChallengeData } from './no-challenge-data';
import { ChallengeCard } from './challenge-card';

export function ChallengeList() {
  const { data: challengeList } = useChallengeList();

  return (
    <div className="px-6 box-border w-full  h-full overflow-hidden">
      <div className="h-full scrollbar-none overflow-y-scroll">
        {challengeList?.data.length === 0 ? (
          <NoChallengeData />
        ) : (
          challengeList?.data.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))
        )}
      </div>
    </div>
  );
}
