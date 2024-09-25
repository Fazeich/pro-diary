import React, { useEffect } from 'react';
import { DiaryWrapper, NoDiaryWrapper } from './styles';
import { useUnit } from 'effector-react';
import {
  $diary,
  changeDiaryFx,
  createDiaryFx,
  deleteDiaryFx,
  getDiariesFx,
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

  useEffect(() => {
    if (user?.id && !isCreatingDiary && !isDeletingDiary && !isChangingDiary) {
      getDiariesFx({ userId: user.id });
    }
  }, [user.id, isCreatingDiary, isDeletingDiary, isChangingDiary]);

  if (isLoadingDiaries || isCreatingDiary) {
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
