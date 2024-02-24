import { TermsInfo, TermsInfoType } from './terms-check';
import IcCheckCircle from '@/assets/icon/ic-check-circle.svg';
import IcCheckCircleOff from '@/assets/icon/ic-check-circle-off.svg';
import IcCheck from '@/assets/icon/ic-check.svg';
import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import clsx from 'clsx';
import { TermNotionModal } from '@/components/setting/term-notion-modal';
import { useToggle } from '@/hooks/use-toggle';
import { termNotionIdInfo } from '@/constants/term-notion';

export function TermscheckForm({
  termsInfo,
  onCheckTerms,
  onCheckAllTerms,
}: {
  termsInfo: TermsInfo[];
  onCheckTerms: (termsType: TermsInfoType) => void;
  onCheckAllTerms: () => void;
}) {
  return (
    <div>
      <div className="flex gap-x-2 items-center">
        <button
          type="button"
          onClick={onCheckAllTerms}
          className="w-8 h-8 flex items-center justify-center"
        >
          {termsInfo.filter((terms) => terms.isChecked === true).length ===
          5 ? (
            <IcCheckCircle />
          ) : (
            <IcCheckCircleOff />
          )}
        </button>
        <div className="text-m_medium text-white-0.9">약관에 모두 동의</div>
      </div>
      <div className="w-full h-[1px] bg-white-0.3 my-2" />
      <div className="flex flex-col gap-y-2">
        {termsInfo.map((terms) => (
          <TermInfo
            key={terms.type}
            terms={terms}
            onCheckTerms={onCheckTerms}
          />
        ))}
      </div>
    </div>
  );
}

function TermInfo({
  terms,
  onCheckTerms,
}: {
  terms: TermsInfo;
  onCheckTerms: (termsType: TermsInfoType) => void;
}) {
  const { toggle, handleToggleOff, handleToggleOn } = useToggle();

  const handleTermsOpen = () => {
    handleToggleOn();
  };

  const notionPageId = termNotionIdInfo[terms.type];

  return (
    <div key={terms.type} className="flex justify-between items-center h-8">
      <div className="flex gap-x-1 items-center">
        <button
          type="button"
          onClick={() => {
            onCheckTerms(terms.type);
          }}
          className="w-8 h-8 flex items-center justify-center"
        >
          <IcCheck
            className={clsx(
              terms.isChecked ? 'stroke-white-0.9' : 'stroke-white-0.15'
            )}
          />
        </button>
        <div className="text-s_light text-white-0.9">{terms.text}</div>
      </div>
      {terms.type !== 'age' && (
        <button
          type="button"
          onClick={handleTermsOpen}
          className="w-8 h-8 flex items-center justify-center"
        >
          <IcCaretRight />
        </button>
      )}
      {terms.type !== 'age' && (
        <TermNotionModal
          isModalOpen={toggle}
          onClose={handleToggleOff}
          notionPageId={notionPageId}
        />
      )}
    </div>
  );
}
