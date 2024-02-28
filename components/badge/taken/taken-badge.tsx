'use client';

import { BadgeType } from '@/types/api/badge';
import { useRouter, useSearchParams } from 'next/navigation';
import { GradientButton } from '@/components/base/gradient-button';
import { useBadgeHistories } from '@/hooks/api/badge';
import { Challenge } from '@/types/api/challenge';
import { changeDateFormatYYMMDD } from '@/libs/utils';
import { pathname } from '@/constants/path';

export function TakenBadge() {
  const route = useRouter();

  const params = useSearchParams();

  const badgeType = params.get('type') as BadgeType;

  const challengeId = params.get('challengeId') as string;

  const { data: badgeHistories } = useBadgeHistories(badgeType);

  if (!badgeType || !challengeId || !badgeHistories) return null;

  const { badgeImageUrl, challenges, title } = badgeHistories.data;

  const challengeInfo = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (challengeInfo === undefined) return null;

  const handleTakenBadgeButtonClick = () => {
    route.push(pathname.CHALLENGE);
  };

  return (
    <div>
      <BadgeInfo badgeImageUrl={badgeImageUrl} title={title} />
      <ChallengeInfo challengeInfo={challenges[0]} />
      <GradientButton
        variant="gradient"
        size="middle"
        className="w-full"
        onClick={handleTakenBadgeButtonClick}
      >
        기념 뱃지 받기
      </GradientButton>
    </div>
  );
}

function BadgeInfo({
  badgeImageUrl,
  title,
}: {
  badgeImageUrl: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-[180px] h-[180px]"
        src={badgeImageUrl}
        alt="21planet-badge"
      />
      <h1 className="text-xxl_medium text-white-0.9 text-center">{title}</h1>
    </div>
  );
}

function ChallengeInfo({ challengeInfo }: { challengeInfo: Challenge }) {
  return (
    <div
      className="border-[1px] border-white-0.15 space-y-2 text-center mb-8 mt-6 w-[276px] p-6 box-border rounded-xl mx-auto"
      style={{
        background:
          'linear-gradient(115deg,rgba(122,115,153,0.6) 0%, rgba(50,46,77,0.0) 98.94%)',
      }}
    >
      <div className="text-s_medium text-white-0.5 ">달성한 목표</div>
      <div className="text-s_medium text-white-0.9">{challengeInfo.title}</div>
      <div className="text-s_thin text-white-0.5">
        {changeDateFormatYYMMDD(new Date(challengeInfo.startDate))} ~{' '}
        {challengeInfo.endDate
          ? changeDateFormatYYMMDD(new Date(challengeInfo.endDate))
          : null}
      </div>
    </div>
  );
}
