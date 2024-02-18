'use client';

interface OptionListLayoutProps {
  optionLayoutInfo: OptionList;
  classname?: string;
}

export default function OptionListLayout({
  optionLayoutInfo,
  classname,
}: OptionListLayoutProps) {
  return (
    <div className={classname}>
      {optionLayoutInfo.label && (
        <div className="text-s_bold text-white-0.5 px-6 mb-2">
          {optionLayoutInfo.label}
        </div>
      )}
      <div className="flex flex-col rounded-xl bg-gray-800">
        {optionLayoutInfo.options.map((option, index) => (
          <button
            onClick={option.onClick}
            type="button"
            className="pl-6 py-3 pr-3"
            key={index}
          >
            {option.content}
          </button>
        ))}
      </div>
    </div>
  );
}
