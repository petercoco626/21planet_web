import { IssueTempPasswordForm } from '@/components/forget-password/email-form';
import { ForgetPasswordHeader } from '@/components/forget-password/header';

export default function ForgetPasswordPage() {
  return (
    <main className="px-6 pb-6 w-full h-full box-border">
      <ForgetPasswordHeader />
      <IssueTempPasswordForm />
    </main>
  );
}
