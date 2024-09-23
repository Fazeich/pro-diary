import React from 'react';
import { DiaryWrapper, NoDiaryWrapper } from './styles';
import { useUnit } from 'effector-react';
import { $diary } from 'stores/diary/diary';
import { DiaryItem } from './ui/DiaryItem';
import { Paragraph } from 'uikit/components';
import { Divider } from 'antd';

export const Diary = () => {
  const { diaries } = useUnit($diary);

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
