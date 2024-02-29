import IcUser from '@/assets/icon/ic-user.svg';
import { pathname } from '@/constants/path';
import Link from 'next/link';

export function ChallengeListHeader() {
  return (
    <header className="px-6 w-full h-14 py-2 box-border flex justify-end">
      <Link
        href={pathname.SETTING}
        className="w-10 h-10 flex items-center justify-center"
      >
        <IcUser />
      </Link>
    </header>
  );
}
