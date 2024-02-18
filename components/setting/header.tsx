'use client';

import { usePathname } from 'next/navigation';
import { GoBackButton } from '../common/go-back-button';

const headerTitle: Record<string, string> = {
  '/setting': '마이페이지',
  '/setting/profile': '계정관리',
  '/setting/withdrawal': '탈퇴하기',
  '/setting/reset-password': '비밀번호 변경',
  '/setting/notification': '알림',
};

export function SettingPageHeader() {
  const currentPath = usePathname();

  return (
    <header className="w-full h-14 flex justify-between items-center mb-8">
      <GoBackButton />
      <div className="text-m_medium text-white relative top-1">
        {headerTitle[currentPath]}
      </div>
      <div className="w-10 h-10" />
    </header>
  );
}
