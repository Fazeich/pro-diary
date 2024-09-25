import React, { useEffect } from 'react';
import { DiaryWrapper, NoDiaryWrapper } from './styles';
import { useUnit } from 'effector-react';
import {
  $diary,
  changeDiaryFx,
  createDiaryFx,
  deleteDiaryFx,
  finishDiaryFx,
  getDiariesFx,
  returnDiaryFx,
} from 'stores/diary/diary';
import { DiaryItem } from './ui/DiaryItem';
import { Paragraph } from 'uikit/components';
import { Divider } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { $main } from 'stores/main/main';

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

  const isPendingDiary =
    isCreatingDiary || isDeletingDiary || isChangingDiary || isFinishingDiary || isReturningDiary;

  useEffect(() => {
    if (user?.id && !isPendingDiary) {
      getDiariesFx({ userId: user.id });
    }
  }, [user.id, isPendingDiary]);

  if (isLoadingDiaries || isPendingDiary) {
    return (
      <NoDiaryWrapper>
        <Loading3QuartersOutlined />
      </NoDiaryWrapper>
    );
  }

  if (diaries.length) {
    return (
      <DiaryWrapper>
        {diaries.map((diary) => (
          <>
            <DiaryItem {...diary} />
            <Divider
              style={{
                margin: 0,
              }}
            />
          </>
        ))}
      </DiaryWrapper>
    );
  }

  return (
    <NoDiaryWrapper>
      <Paragraph text='Пока что у вас нет целей :(' />
      <Paragraph text='Давайте это исправим!' />
    </NoDiaryWrapper>
  );
};
