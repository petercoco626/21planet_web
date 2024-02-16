import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps<T> = {
  name: string;
  labelName?: string;
  className?: string;
  accept?: string;
  placeholder?: T;
  defaultValue?: T;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  multiple?: boolean;
} & RegisterOptions;

export function Input<T>(props: InputProps<T>) {
  const {
    name,
    labelName,
    placeholder,
    type,
    className,
    accept,
    id,
    multiple,
    ...registerOptions
  } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className={clsx('flex flex-col gap-0.5 items-start self-stretch')}>
      <label
        htmlFor={id}
        className={'text-gray-600 text-s2'}
      >
        {labelName}
      </label>
      <input
        id={id}
        accept={accept}
        type={type}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        className={clsx(
          'outline-none px-3 py-[7px] text-white placeholder:text-gray-600',
          'bg-gray-850 border',
          'rounded w-full',
          error ? 'border-system-red' : 'border-transparent focus:border-photio-green',
        )}
        {...register(name, registerOptions)}
      />
      <p className={'text-system-red text-b1'}>{error?.message || ''}</p>
    </div>
  );
}
