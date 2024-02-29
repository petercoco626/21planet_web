'use client';

import { GoBackButton } from '@/components/common/go-back-button';

export function ChallengeCommentHeader() {
  return (
    <header className="px-6 w-full h-14 py-2 flex justify-between items-center box-border">
      <GoBackButton />
    </header>
  );
}
