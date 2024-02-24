import clsx from 'clsx';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  classname?: string;
  isToastOn: boolean;
  onToastOff: () => void;
}

export function Toast({
  message,
  classname,
  isToastOn,
  onToastOff,
}: ToastProps) {
  useEffect(() => {
    if (isToastOn) {
      setTimeout(() => {
        onToastOff();
      }, 3000);
    }
  }, [isToastOn]);

  return (
    <div
      className={clsx(
        'min-w-[200px] max-w-[312px] rounded-[999px] bg-gray-500 py-3 px-2 mx-auto text-s_medium text-white-0.9 text-center duration-300',
        'break-keep',
        isToastOn && '-translate-y-0 opacity-100',
        !isToastOn && 'translate-y-6 opacity-0 invisible',
        classname
      )}
    >
      {message}
    </div>
  );
}
