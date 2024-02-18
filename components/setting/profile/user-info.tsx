'use client';

import { useUserProfile } from '@/hooks/api/user';
import OptionListLayout from '../option-list-layout';

export default function UserInfo() {
  const { data: userProfileResponse } = useUserProfile();

  if (!userProfileResponse?.data) return null;

  const { email, nickname } = userProfileResponse.data;

  const optionList: OptionList = {
    options: [
      {
        content: (
          <div className="w-full flex flex-col items-start">
            <div className="text-s_light text-white-0.5 mb-[2px]">닉네임</div>
            <div className="text-m_light text-white">{nickname}</div>
          </div>
        ),
      },
      {
        content: (
          <div className="w-full flex flex-col items-start">
            <div className="text-s_light text-white-0.5 mb-[2px]">
              이메일(ID)
            </div>
            <div className="text-m_light text-white">{email}</div>
          </div>
        ),
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />;
}
