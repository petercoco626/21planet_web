import Logout from '@/components/setting/profile/logout';
import ResetPassword from '@/components/setting/profile/reset-password';
import UserInfo from '@/components/setting/profile/user-info';
import Withdrawal from '@/components/setting/profile/withdrawal';

export default function ProfilePage() {
  return (
    <div>
      <UserInfo />
      <ResetPassword />
      <Logout />
      <Withdrawal />
    </div>
  );
}
