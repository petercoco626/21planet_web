import IcCaretLeft from '@/assets/icon/ic-caret-left.svg';
import { useRouter } from 'next/navigation';

interface GoBackButtonProps {
  onClickGobackButton?: () => void;
}

export function GoBackButton({ onClickGobackButton }: GoBackButtonProps) {
  const route = useRouter();

  const handleGoBackButtonClick = () => {
    if (onClickGobackButton) {
      onClickGobackButton();
      return;
    }
    route.back();
  };

  return (
    <button
      type="button"
      onClick={handleGoBackButtonClick}
      className="w-10 h-10 flex flex-col items-center justify-center"
    >
      <IcCaretLeft />
    </button>
  );
}
