'use client';

import { pathname } from '@/constants/path';
import { useBadge } from '@/hooks/api/badge';
import Link from 'next/link';

export function BadgeList() {
  // const { data: badgeList, error } = useBadge();

  // Error UI
  // if (error) return null;

  return (
    <section className="w-[312px] h-full mt-8  mx-auto overflow-hidden">
      <div className="grid grid-cols-3 h-full pb-[100px] gap-4 overflow-y-scroll scrollbar-none">
        {mockData.map((badge, idx) => (
          <Link
            key={idx}
            href={pathname.BADGE_DETAIL + `?type=${idx}`}
            className="mx-auto"
          >
            <img className="w-[88px] h-[88px] mb-1 bg-white-0.7" />
            <div className="text-s_medium text-white-0.7">첫 목표 달성</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const mockData = Array.from(Array(100), (_, index) => index + 1);
