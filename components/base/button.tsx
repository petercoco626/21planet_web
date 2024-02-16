import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text';

type ButtonSize = 'large' | 'middle' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'primary',
  isLoading = false,
  className = '',
  size = 'large',
  children,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle =
    'rounded-xl flex items-center justify-center box-border disabled:bg-gray-800 disabled:text-white-0.15';

  const styleOnSize: Record<ButtonSize, string> = {
    large: 'h-12 text-m_medium ',
    middle: 'h-10 text-s_medium ',
    small: 'h-8 text-xs_medium ',
  };

  const styleOnVariant: Record<ButtonVariant, string> = {
    primary:
      'bg-violet-500 dactive:bg-violet-400 px-5 text-white active:text-violet-100 ',
    secondary: 'bg-gray-600 active:bg-gray-500 px-5 text-white-0.9',
    tertiary:
      'bg-gray-700 active:bg-gray-600 px-5 text-violet-300 active:text-violet-200',
    text: 'bg-transparent text-violet-300',
  };

  const mergedClassNames = clsx(
    className,
    defaultButtonStyle,
    styleOnSize[size],
    styleOnVariant[variant]
  );

  return (
    <button className={mergedClassNames} disabled={isLoading} {...props}>
      {isLoading ? null : children}
    </button>
  );
};
