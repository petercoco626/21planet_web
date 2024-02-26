'use client';

import { useBadgeHistories } from '@/hooks/api/badge';
import { changeDateFormatYYMMDD } from '@/libs/utils';
import { BadgeType } from '@/types/api/badge';
import { useSearchParams } from 'next/navigation';

export function BadgeInfo() {
  const params = useSearchParams();

  const BadgeType = params.get('type') as BadgeType;

  const { data: badgeHistroyInfo } = useBadgeHistories(BadgeType || 'COMMON_1');

  if (!BadgeType) return null;

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 box-border mt-8">
        <img
          src={badgeHistroyInfo?.data.badgeImageUrl}
          alt="21planet-badge-img"
          className="w-[180px] h-[180px]"
        />
        <div className="text-xxl_medium text-white-0.9">
          {badgeHistroyInfo?.data.title}
        </div>
      </div>
      <div className="text-l_bold text-white my-6 pl-6">달성한 목표</div>
      <div className="w-full pl-6 box-border overflow-y-scroll scrollbar-none">
        {badgeHistroyInfo?.data.challenges.map((challenge) => (
          <div key={challenge.id} className="py-4 border-t border-white-0.15">
            <div className="mb-2 text-s_medium text-white-0.9">
              {challenge.title}
            </div>
            <div className="text-s_thin text-white-0.5">
              {' '}
              {changeDateFormatYYMMDD(new Date(challenge.startDate))} ~{' '}
              {challenge.endDate
                ? changeDateFormatYYMMDD(new Date(challenge.endDate))
                : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
