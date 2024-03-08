'use client';

import { pathname } from '@/constants/path';
import { useBadgeCounts } from '@/hooks/api/badge';
import { BadgeCountInfo } from '@/types/api/badge';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export function BadgeList() {
  const { data: badgeCountsInfo, error } = useBadgeCounts();

  const route = useRouter();

  // Error UI
  if (!badgeCountsInfo || error) return null;

  const handleBadgeButtonClick = (badge: BadgeCountInfo) => {
    if (badge.count === 0) return;
    route.push(pathname.BADGE_HISTORY + `?type=${badge.type}`);
  };

  return (
    <section className="w-[312px] h-full mt-8  mx-auto overflow-hidden">
      <div className="w-full h-full overflow-y-scroll scrollbar-none">
        <div className="grid grid-cols-3 pb-[100px] gap-4">
          {badgeCountsInfo.data.map((badge) => (
            <button
              key={badge.type}
              className="mx-auto"
              onClick={() => handleBadgeButtonClick(badge)}
            >
              <img
                className={clsx(
                  'w-[88px] h-[88px] mb-1',
                  badge.count === 0 && 'grayscale'
                )}
                src={badge.imageUrl}
                alt="21planet-badge-img"
              />
              <div
                className={clsx(
                  'text-s_medium text-center',
                  badge.count > 0 ? 'text-white-0.7' : 'text-white-0.3'
                )}
              >
                {badge.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
