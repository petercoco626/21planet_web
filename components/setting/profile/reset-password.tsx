'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import { pathname } from '@/constants/path';
import { useRouter } from 'next/navigation';
import OptionListLayout from '../option-list-layout';

export default function ResetPassword() {
  const route = useRouter();

  const optionList: OptionList = {
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">비밀번호 변경</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {
          route.push(pathname.RESET_PASSWORD);
        },
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />;
}
