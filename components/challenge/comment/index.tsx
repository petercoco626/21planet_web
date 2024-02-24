'use client';

import {
  useChallenge,
  useChallengeChecksOnChallengeId,
} from '@/hooks/api/challenge';
import { useState } from 'react';
import { ChallengeTitle } from './challenge-title';
import CheckedDatePlanetInfo from './checked-date-planet-info';
import { WriteCommentForm } from './write-comment-form';
import { CheckedDatePlanetCarousel } from './checked-date-planet-carousel';

interface ChallengeCommentInfoProps {
  challengeId: string;
}

export function ChallengeCommentInfo({
  challengeId,
}: ChallengeCommentInfoProps) {
  const { data: challenge } = useChallenge(challengeId);

  const { data: challengeChecks } =
    useChallengeChecksOnChallengeId(challengeId);

  const [pageIndex, setPageIndex] = useState(0);

  if (!challengeChecks || !challenge) return null;

  const filteredChallengeChecks = challengeChecks.data.filter(
    (checks) => checks !== null
  );

  const { checkedAt, comment, id, planet } = filteredChallengeChecks[pageIndex];

  return (
    <div className="mx-6 box-border overflow-hidden">
      <ChallengeTitle title={challenge.data.title} />
      <CheckedDatePlanetCarousel
        challengeChecks={filteredChallengeChecks}
        onChangePageIndex={(newPage: number) => setPageIndex(newPage)}
      />
      <CheckedDatePlanetInfo
        checkedAt={checkedAt}
        description={planet.description}
        title={planet.title}
      />
      <WriteCommentForm challengeCheckId={id} writtenComment={comment} />
    </div>
  );
}
