import { SignUpForm } from '@/components/sign-up';
import { SignUpHeader } from '@/components/sign-up/header';

export default function SignUpPage() {
  return (
    <main className="px-6 pb-6 w-full h-full box-border">
      <SignUpHeader />
      <SignUpForm />
    </main>
  );
}
