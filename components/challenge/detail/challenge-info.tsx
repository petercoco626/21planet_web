'use client';

import { Badge } from '@/components/base/badge';
import {
  useChallenge,
  useChallengeChecksOnChallengeId,
} from '@/hooks/api/challenge';
import { changeDateFormatYYMMDD } from '@/libs/utils';

export function ChallengeInfo({ challengeId }: { challengeId: string }) {
  const { data: challengeInfo } = useChallenge(challengeId);

  const { data: challengeCheckList } =
    useChallengeChecksOnChallengeId(challengeId);

  if (!challengeInfo || !challengeCheckList) return null;

  return (
    <div className="px-6 mt-4 mb-8 space-y-2">
      <Badge text={`${challengeInfo?.data.checkedDateListLength}일 째`} />
      <div className="text-l_medium text-white-0.9 mb-2">
        {challengeInfo?.data.title}
      </div>
      <div className="text-s_thin text-white-0.5 mb-8">
        {changeDateFormatYYMMDD(new Date(challengeInfo?.data.startDate))} ~{' '}
        {challengeInfo?.data.endDate
          ? changeDateFormatYYMMDD(new Date(challengeInfo?.data.endDate))
          : null}
      </div>
    </div>
  );
}
