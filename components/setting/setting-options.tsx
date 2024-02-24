'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import OptionListLayout from './option-list-layout';
import { pathname } from '@/constants/path';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SettingOptions() {
  const route = useRouter();

  const optionList: OptionList = {
    label: '설정',
    options: [
      {
        content: (
          <Link
            href={
              'https://zizzi-world.notion.site/3f2cc61446f44ff8b718862fd6352c61?pvs=4'
            }
            className="w-full flex flex-row justify-between items-center"
          >
            <div className="text-m_light text-white">약관 및 동의 내용</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </Link>
        ),
        onClick: () => {},
      },
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">알림</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {
          route.push(pathname.NOTIFICATION);
        },
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />;
}
