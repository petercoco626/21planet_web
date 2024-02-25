'use client';

import { useChallengeList } from '@/hooks/api/challenge';
import { useUserProfile } from '@/hooks/api/user';

export function Greeting() {
  const { data: challengeList } = useChallengeList();

  const { data: userProfile } = useUserProfile();

  const greeting =
    challengeList?.data.length === 0
      ? '어떤 습관을 만들고 싶나요?'
      : '오늘도 화이팅!';

  return (
    <div className="text-xxl_light text-white-0.9 mb-4 mt-10 px-6 box-border">
      <span className="text-violet-300 text-xxl_bold">
        {userProfile?.data.nickname}
      </span>
      님, {greeting}
    </div>
  );
}
