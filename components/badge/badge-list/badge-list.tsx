'use client';

import { pathname } from '@/constants/path';
import { useBadgeCounts } from '@/hooks/api/badge';
import clsx from 'clsx';
import Link from 'next/link';

export function BadgeList() {
  const { data: badgeCountsInfo, error } = useBadgeCounts();

  // Error UI
  if (!badgeCountsInfo || error) return null;

  return (
    <section className="w-[312px] h-full mt-8  mx-auto overflow-hidden">
      <div className="grid grid-cols-3 h-full pb-[100px] gap-4 overflow-y-scroll scrollbar-none">
        {badgeCountsInfo.data.map((badge, idx) => (
          <Link
            key={idx}
            href={pathname.BADGE_DETAIL + `?type=${idx}`}
            className="mx-auto"
          >
            <img
              className={clsx(
                'w-[88px] h-[88px] mb-1',
                badge.count === 0 && 'grayscale'
              )}
              src={badge.imageUrl}
            />
            <div
              className={clsx(
                'text-s_medium text-center',
                badge.count > 0 ? 'text-white-0.7' : 'text-white-0.3'
              )}
            >
              {badge.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
