'use client';

import { Button } from '@/components/base/button';
import { GradientButton } from '@/components/base/gradient-button';
import { Input } from '@/components/base/input';
import { Toast } from '@/components/base/toast';
import { Toggle } from '@/components/base/toggle';
import { useToggle } from '@/hooks/use-toggle';
import { FormProvider, useForm } from 'react-hook-form';

export default function DesignPage() {
  const untitledFormMethods = useForm<{
    foo: string;
  }>({
    mode: 'all',
    defaultValues: {
      foo: '',
    },
  });

  const { toggle, handleToggleOff } = useToggle({ initialToggleState: true });

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <GradientButton variant="gradient" size="middle">
          button
        </GradientButton>
        <GradientButton variant="gradient-full" size="middle">
          button
        </GradientButton>
        <Button variant="primary" size="middle">
          button
        </Button>
        <Button variant="secondary" size="middle">
          button
        </Button>
        <Button variant="tertiary" size="middle">
          button
        </Button>
        <Button variant="text" size="middle">
          button
        </Button>
      </div>
      <div>
        <FormProvider {...untitledFormMethods}>
          <Input
            name="foo"
            type="email"
            placeholder={'foo'}
            required={{
              value: true,
              message: 'Required',
            }}
            maxLength={{
              value: 10,
              message: 'Max length 10',
            }}
          />
          <button type="submit" className="text-white">
            submit
          </button>
        </FormProvider>
      </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Toast message="test" isToastOn={toggle} onToastOff={handleToggleOff} />
      </div>
    </div>
  );
}
