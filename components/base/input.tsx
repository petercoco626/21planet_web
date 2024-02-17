import { useToggle } from '@/hooks/use-toggle';
import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import IcWarning from '@/assets/icon/ic-warning.svg';
import IcEye from '@/assets/icon/ic-eye.svg';
import IcEyeClosed from '@/assets/icon/ic-eye-closed.svg';

type InputType = 'email' | 'password' | 'text';

type InputProps<T> = {
  name: string;
  labelName?: string;
  className?: string;
  accept?: string;
  placeholder?: T;
  defaultValue?: T;
  type?: InputType;
  id?: string;
  multiple?: boolean;
} & RegisterOptions;

const textInputWrapperDefaultStyle =
  'w-full h-12 px-4 box-border rounded-xl border-[1px] bg-gray-800 active:bg-gray-700 focus:bg-gray-700 placeholder:text-[rgba(255,255,255,0.3)]';

const textInputDefaultStyle =
  'text-white text-m_light bg-transparent outline-none';

export function Input<T>(props: InputProps<T>) {
  const {
    name,
    labelName,
    placeholder,
    type = 'email',
    className,
    accept,
    id,
    multiple,
    ...registerOptions
  } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { toggle: isSecureText, handleToggle } = useToggle({
    initialToggleState: true,
  });

  const { error } = getFieldState(name, formState);

  const errorStyle = {
    label: error ? 'text-red-1' : 'text-white-0.5',
    textInputBorder: error
      ? 'border-red-1'
      : 'border-gray-800 focus:border-gary-700',
  };
  return (
    <div className={className}>
      {labelName && (
        <label
          htmlFor={id}
          className={clsx(errorStyle.label, 'text-s_medium mb-1 pl-2')}
        >
          {labelName}
        </label>
      )}

      {(() => {
        if (type === 'email')
          return (
            <div
              className={clsx(
                textInputWrapperDefaultStyle,
                errorStyle.textInputBorder
              )}
            >
              <input
                id={id}
                accept={accept}
                type={type}
                placeholder={
                  typeof placeholder === 'string' ? placeholder : undefined
                }
                className={clsx(
                  'w-full h-full ',
                  textInputDefaultStyle,
                  error
                    ? 'border-system-red'
                    : 'border-transparent focus:border-photio-green'
                )}
                {...register(name, registerOptions)}
              />
            </div>
          );

        if (type === 'password')
          return (
            <div
              className={clsx(
                textInputWrapperDefaultStyle,
                errorStyle.textInputBorder,
                'flex flex-row justify-between items-center'
              )}
            >
              <input
                id={id}
                accept={accept}
                type={type}
                placeholder={
                  typeof placeholder === 'string' ? placeholder : undefined
                }
                className={clsx(textInputDefaultStyle, 'w-4/5')}
                {...register(name, registerOptions)}
              />
              <button
                onClick={handleToggle}
                className="w-4 h-4 ml-2"
                type="button"
              >
                {isSecureText ? <IcEyeClosed /> : <IcEye />}
              </button>
            </div>
          );

        if (type === 'text')
          return (
            <div
              className={clsx(
                textInputWrapperDefaultStyle,
                errorStyle.textInputBorder
              )}
            >
              <input
                id={id}
                accept={accept}
                type={type}
                placeholder={
                  typeof placeholder === 'string' ? placeholder : undefined
                }
                className={clsx('w-full h-full', textInputDefaultStyle)}
                {...register(name, registerOptions)}
              />
            </div>
          );
      })()}

      {/** 여기 나중에 hook으로 처리해야함 */}
      {error && (
        <div className="pl-2 flex gap-x-1 flex-row items-center mt-[2px]">
          <IcWarning />
          <p className="text-xs_regular text-red-1">{error.message}</p>
        </div>
      )}
    </div>
  );
}
