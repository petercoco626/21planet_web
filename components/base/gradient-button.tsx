import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import LoadingIcon from '@/assets/icons/ic-loading.svg';

type ButtonVariant = 'gradient' | 'gradient-full';

type ButtonSize = 'large' | 'middle' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const GradientButton = ({
  variant = 'gradient',
  isLoading = false,
  className = '',
  size = 'large',
  children,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle =
    'w-full flex items-center justify-center box-border';

  const styleOnSize: Record<ButtonSize, string> = {
    large: 'h-12 text-m_medium ',
    middle: 'h-10 text-s_medium ',
    small: 'h-8 text-xs_medium ',
  };

  const styleOnVariant: Record<ButtonVariant, string> = {
    gradient: ' px-5 text-white active:text-violet-100 rounded-xl',
    'gradient-full':
      'text-white active:text-violet-100 w-full h-14 text-m_medium ',
  };

  const mergedClassNames = clsx(
    className,
    defaultButtonStyle,
    variant === 'gradient' && styleOnSize[size],
    styleOnVariant[variant]
  );

  return (
    <button
      className={clsx(mergedClassNames)}
      disabled={isLoading}
      {...props}
      style={{
        background: 'linear-gradient(94deg, #5A49BF 0.69%, #B069D1 100%)',
      }}
    >
      {isLoading ? null : children}
    </button>
  );
};
