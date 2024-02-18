'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import OptionListLayout from '../option-list-layout';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';

export default function Withdrawal() {
  const route = useRouter();

  const optionList: OptionList = {
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">서비스 탈퇴</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {
          route.push(pathname.WITHDRAWAL);
        },
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />;
}
