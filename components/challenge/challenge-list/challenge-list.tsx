'use client';

import { useChallengeList } from '@/hooks/api/challenge';
import { NoChallengeData } from './no-challenge-data';
import { ChallengeCard } from './challenge-card';
import dynamic from 'next/dynamic';

const Loading = dynamic(
  () => import('@/components/base/loading').then((mod) => mod.Loading),
  {
    loading: () => <div className="text-white">Loading...</div>,
  }
);

export function ChallengeList() {
  const { data: challengeList, isLoading } = useChallengeList();

  if (isLoading) return <Loading />;

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
