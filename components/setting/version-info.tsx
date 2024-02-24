'use client';

import { Button } from '../base/button';
import OptionListLayout from './option-list-layout';

export function VersionInfo() {
  const optionList: OptionList = {
    label: '앱 버전',
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">v 1.0.0</div>
            <span className="text-gray-400 text-xs_bold h-8 flex items-center">
              최신버전
            </span>
          </div>
        ),
        onClick: () => {},
      },
    ],
  };

  return <OptionListLayout optionLayoutInfo={optionList} />;
}
