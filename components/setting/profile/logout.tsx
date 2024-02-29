'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import { LogoutModal } from './logout-modal';
import { useToggle } from '@/hooks/use-toggle';
import OptionListLayout from '../option-list-layout';

export default function Logout() {
  const {
    handleToggleOff: handleLogoutModalClose,
    toggle: isLogoutModalOpen,
    handleToggleOn,
  } = useToggle();

  const optionList: OptionList = {
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">로그아웃</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: handleToggleOn,
      },
    ],
  };

  return (
    <div>
      <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />
      <LogoutModal
        isModalOpen={isLogoutModalOpen}
        onClose={handleLogoutModalClose}
      />
    </div>
  );
}
