import { SettingPageHeader } from '@/components/setting/header';
import { PropsWithChildren } from 'react';

export default function SettingLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full h-full px-6 box-border">
      <SettingPageHeader />
      {children}
    </main>
  );
}
