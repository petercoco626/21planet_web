'use client';

import { useCurrentResetPasswordProcessType } from '@/stores/reset-password/sign-up.store';
import { CheckCurrentPasswordForm } from './check-current-password-form';
import { ChangePasswordForm } from './change-password-form';

export function ResetPasswordForm() {
  const currentSignUpProcessType = useCurrentResetPasswordProcessType();

  return (
    <div>
      {currentSignUpProcessType === 'check-current-password' && (
        <CheckCurrentPasswordForm />
      )}
      {currentSignUpProcessType === 'change-password' && <ChangePasswordForm />}
    </div>
  );
}
