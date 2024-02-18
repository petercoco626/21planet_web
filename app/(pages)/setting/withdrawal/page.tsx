import WithdrawalButton from '@/components/setting/withdrawal/withdrawal-button';

export default function WithdrawalPage() {
  return (
    <div>
      <div className="text-xxl_light text-white-0.9">
        정말 21planet을 떠나시겠어요?
      </div>
      <div className="my-8">
        {withdrawalDescripiontList.map((description) => (
          <ol className="flex flex-row items-start" key={description}>
            <li className="text-m_light text-white-0.9 list-disc ml-4 break-keep">
              {description}
            </li>
          </ol>
        ))}
      </div>
      <WithdrawalButton />
    </div>
  );
}

const withdrawalDescripiontList = [
  '탈퇴 시 바로 계정이 삭제됩니다.',
  '설정한 목표, 모았던 배지가 사라지고, 복구할 수 없습니다.',
  '아래 ‘탈퇴’ 버튼을 누르면 계정이 바로 삭제됩니다. 신중하게 눌러 주세요.',
];
