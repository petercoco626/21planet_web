import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Toggle({ ...props }: ToggleProps) {
  return (
    <input
      className={clsx(
        'h-6 w-11 appearance-none rounded-[999px] bg-gray-700 hover:cursor-pointer relative p-1 box-border flex items-center',
        "before:pointer-events-none before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-gray-500 before:content-[''] before:transition-[transform_0.2s]",
        'checked:before:translate-x-[20px] checked:bg-violet-500 checked:before:bg-white checked:before:w-4 checked:before:h-4'
        // 'disabled:before:bg-gray-500 disabled:pointer-events-none disabled:bg-gray-250'
      )}
      type="checkbox"
      {...props}
    />
  );
}
