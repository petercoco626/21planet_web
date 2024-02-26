import { GoBackButton } from '@/components/common/go-back-button';
import IcExport from '@/assets/icon/ic-export.svg';

export function BadgeDetailHeader() {
  const handleExportButtonClick = () => {};

  return (
    <header className="w-full flex h-14 justify-between items-center px-4">
      <GoBackButton />
      <button
        className="w-10 h-10 flex flex-col items-center justify-center mr-2"
        onClick={handleExportButtonClick}
        type="button"
      >
        <IcExport />
      </button>
    </header>
  );
}
