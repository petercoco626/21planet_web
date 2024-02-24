import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { pathname } from '@/constants/path';
import { changeDateFormatYYMMDD } from '@/libs/utils';
import { ChallengeCheck } from '@/types/api/challenge-check';
import { useRouter } from 'next/navigation';

interface CheckedChallengeDateInfoModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  checkedChallenge: ChallengeCheck;
}

export function CheckedChallengeDateInfoModal({
  onClose,
  isModalOpen,
  checkedChallenge,
}: CheckedChallengeDateInfoModalProps) {
  const route = useRouter();

  const handleRouteCommentPageButtonClick = () => {
    route.push(pathname.COMMENT_CHALLENGE + `/${checkedChallenge.challengeId}`);
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div className="p-4 bg-gray-700 rounded-3xl flex flex-col items-center w-[290px] relative">
        <img
          className="w-[180px] h-[180px] rounded-full absolute -top-14 left-1/2 -translate-x-1/2"
          src={checkedChallenge.planet.url}
          alt="21planet_planet"
          style={{
            filter: 'drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.25))',
          }}
        />
        <div className="mb-2 text-xl_bold text-white-0.9 text-center mt-[130px]">
          {checkedChallenge.planet.title}
        </div>
        <div className="mb-2 text-s_light text-white-0.7 text-center">
          {checkedChallenge.planet.description}
        </div>
        <div className="mb-4 text-s_thin text-white-0.3">
          {changeDateFormatYYMMDD(new Date(checkedChallenge.checkedAt))}
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            variant="secondary"
            size="large"
            className="w-full"
            onClick={onClose}
          >
            닫기
          </Button>
          <Button
            variant="primary"
            size="large"
            className="w-full"
            onClick={handleRouteCommentPageButtonClick}
          >
            일지 쓰기
          </Button>
        </div>
      </div>
    </Modal>
  );
}
