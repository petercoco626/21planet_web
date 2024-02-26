'use client';

import { BadgeInfo } from '@/components/badge/history/badge-into';
import { BadgeHistoryHeader } from '@/components/badge/history/header';
import { Suspense } from 'react';

export default function BadgeHistoryPage() {
  return (
    <main className="w-full h-full">
      <BadgeHistoryHeader />
      <Suspense>
        <BadgeInfo />
      </Suspense>
    </main>
  );
}
