import { AskingOptions } from '@/components/setting/asking-options';
import { PersonalOptions } from '@/components/setting/personal-options';
import { ProfileLayout } from '@/components/setting/profile-layout';
import { SettingOptions } from '@/components/setting/setting-options';
import { VersionInfo } from '@/components/setting/version-info';

export default function SettingPage() {
  return (
    <div>
      <ProfileLayout />
      <PersonalOptions />
      <SettingOptions />
      <AskingOptions />
      <VersionInfo />
    </div>
  );
}
