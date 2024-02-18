'use client';

import { useUserProfile } from '@/hooks/api/user';
import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';

export function ProfileLayout() {
  const route = useRouter();

  const { data: userProfileResponse } = useUserProfile();

  const handleRouteSettingScreen = () => {
    route.push(pathname.PROFILE);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center mt-8 mb-6">
      <div className="flex flex-col">
        <div className="text-xxl_light text-white-0.9">21planet 여행자</div>
        <div className="text-xxl_bold text-white-0.9">
          {userProfileResponse?.data.nickname}
        </div>
      </div>
      <button
        type="button"
        className="px-3 py-1 rounded-[99px] bg-gray-700 flex flex-row justify-center items-center"
        onClick={handleRouteSettingScreen}
      >
        <div className="text-xs_bold text-white-0.5">계정관리</div>
        <IcCaretRight />
      </button>
    </div>
  );
}
