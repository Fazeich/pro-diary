import React, { useEffect } from 'react';
import { DiaryWrapper, NoDiaryWrapper } from './styles';
import { useUnit } from 'effector-react';
import { $diary, getDiariesFx } from 'stores/diary/diary';
import { DiaryItem } from './ui/DiaryItem';
import { Paragraph } from 'uikit/components';
import { Divider } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

export const Diary = () => {
  const { diaries } = useUnit($diary);
  const isLoadingDiaries = useUnit(getDiariesFx.pending);

  useEffect(() => {
    if (!diaries.length) {
      getDiariesFx();
    }
  }, []);

  if (isLoadingDiaries) {
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
