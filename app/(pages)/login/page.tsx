import { AskingForgetPassword } from '@/components/login/asking-forget-password';
import { LoginHeader } from '@/components/login/header';
import { LoginForm } from '@/components/login/login-form';

export default function LoginPage() {
  return (
    <main className="px-6 pb-6 w-full h-full box-border">
      <LoginHeader />
      <LoginForm />
      <AskingForgetPassword />
    </main>
  );
}
