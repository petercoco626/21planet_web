import clsx from 'clsx';

export function Badge({
  text,
  classname,
}: {
  text: string;
  classname?: string;
}) {
  return (
    <span
      className={clsx(
        'h-[18px] px-[6px] py-[2px] rounded-xl bg-gray-600 text-xs_light text-white-0.9',
        classname
      )}
    >
      {text}
    </span>
  );
}
