import React, { useEffect } from 'react';
import { DiaryWrapper, NoDiaryWrapper } from './styles';
import { useUnit } from 'effector-react';
import {
  $diary,
  archiveDiaryFx,
  changeDiaryFx,
  createDiaryFx,
  deleteDiaryFx,
  finishDiaryFx,
  getDiariesFx,
  returnDiaryFx,
  unarchiveDiaryFx,
} from 'stores/diary/diary';
import { DiaryItem } from './ui/DiaryItem';
import { Empty, notification } from 'antd';
import { $main } from 'stores/main/main';
import { uniqueId } from 'lodash';
import { Divider, Loader } from 'features';

export const Diary = () => {
  // stores
  const { diaries } = useUnit($diary);
  const { user } = useUnit($main);

  // pendings
  const isLoadingDiaries = useUnit(getDiariesFx.pending);
  const isCreatingDiary = useUnit(createDiaryFx.pending);
  const isDeletingDiary = useUnit(deleteDiaryFx.pending);
  const isChangingDiary = useUnit(changeDiaryFx.pending);
  const isFinishingDiary = useUnit(finishDiaryFx.pending);
  const isReturningDiary = useUnit(returnDiaryFx.pending);
  const isArchivingDiary = useUnit(archiveDiaryFx.pending);
  const isUnarchivingDiary = useUnit(unarchiveDiaryFx.pending);

  const isPendingDiary =
    isCreatingDiary ||
    isDeletingDiary ||
    isChangingDiary ||
    isFinishingDiary ||
    isReturningDiary ||
    isArchivingDiary ||
    isUnarchivingDiary;

  useEffect(() => {
    if (user?.id && !isPendingDiary) {
      getDiariesFx({ userId: user.id }).catch((req) => {
        const errorMessage = req?.response?.data?.message;

        notification.error({
          message: errorMessage || 'Не удалось получить список задач',
        });
      });
    }
  }, [user.id, isPendingDiary]);

  if (isLoadingDiaries || isPendingDiary) {
    return <Loader />;
  }

  if (diaries?.length) {
    return (
      <DiaryWrapper>
        {diaries?.map((diary) => (
          <>
            <DiaryItem {...diary} key={uniqueId()} />
            <Divider key={uniqueId()} />
          </>
        ))}
      </DiaryWrapper>
    );
  }

  return (
    <NoDiaryWrapper>
      <Empty description='Пока что у вас нет целей :(' />
    </NoDiaryWrapper>
  );
};
