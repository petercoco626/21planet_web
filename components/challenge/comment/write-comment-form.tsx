import { useCommentOnCheckedDate } from '@/hooks/api/challenge-check';
import { useEffect, useState } from 'react';
import IcPencilLine from '@/assets/icon/ic-pencil-line.svg';
import { Button } from '@/components/base/button';
import clsx from 'clsx';
import { FormProvider, useForm } from 'react-hook-form';

const maxCommentLenght = 1000;

interface CommentFormValue {
  comment: string;
}

export function WriteCommentForm({
  challengeCheckId,
  writtenComment,
}: {
  challengeCheckId: string;
  writtenComment: string | null;
}) {
  const { mutateAsync: commentOnDateMutate } = useCommentOnCheckedDate();

  const CreateChallengeFormMethods = useForm<CommentFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      comment: writtenComment || '',
    },
  });

  const { handleSubmit, register, watch, setValue } =
    CreateChallengeFormMethods;

  const currentComment = watch('comment');

  const [isCommentWriteMode, setIsCommentWriteMode] = useState(false);

  const handleLeaveCommentChallenge = async ({ comment }: CommentFormValue) => {
    if (comment.length === 0) {
      alert('comment를 작성해주세요 !');
      return;
    }

    await commentOnDateMutate(
      {
        challengeCheckId,
        comment,
      },
      {
        onSuccess: () => {
          setIsCommentWriteMode(false);
        },
      }
    );
  };

  useEffect(() => {
    setValue('comment', writtenComment || '');
    setIsCommentWriteMode(false);
  }, [challengeCheckId]);

  if (!isCommentWriteMode)
    return (
      <div className="mb-12">
        <div className="mb-2 flex flex-row items-center gap-x-2">
          <div className="text-l_bold text-white">여행일지</div>
          <button onClick={() => setIsCommentWriteMode(true)}>
            <IcPencilLine />
          </button>
        </div>
        <div className="h-[120px] overflow-y-scroll scrollbar-none">
          {writtenComment ? (
            <div className="text-m_medium text-white-0.9 break-words">
              {writtenComment}
            </div>
          ) : (
            <div className="text-s_light text-white-0.5">
              작성한 여행일지가 없어요. 기록을 남겨보세요.
            </div>
          )}
        </div>
      </div>
    );

  return (
    <FormProvider {...CreateChallengeFormMethods}>
      <form
        className="px-6 mb-12"
        autoComplete="off"
        onSubmit={handleSubmit((CommentFormValue) => {
          handleLeaveCommentChallenge(CommentFormValue);
        })}
      >
        <div className="mb-2 flex flex-row items-center gap-x-2">
          <div className="text-l_bold text-white">여행일지</div>
          <div className="text-s_light text-white-0.5">
            {currentComment.length}/{maxCommentLenght}
          </div>
        </div>
        <textarea
          placeholder="기록하고 싶은 내용을 적어주세요."
          className={clsx(
            'w-full h-[120px] text-p_m_light bg-gray-800 px-4 py-3 box-border text-white-0.9 mb-2 rounded-xl',
            'outline-none resize-none scrollbar-none'
          )}
          maxLength={maxCommentLenght}
          {...register('comment', {})}
        />
        <Button variant="secondary" size="large" className="w-full">
          저장
        </Button>
      </form>
    </FormProvider>
  );
}
