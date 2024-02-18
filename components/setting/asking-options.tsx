'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import OptionListLayout from './option-list-layout';

export default function AskingOptions() {
  const optionList: OptionList = {
    label: '묻고 답하기',
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">1:1문의</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {},
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />;
}
