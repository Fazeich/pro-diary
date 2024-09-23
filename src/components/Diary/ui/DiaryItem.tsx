import { Dropdown } from 'antd';
import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { addDiary, removeDiary } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { $efficiency, $main } from 'stores/main/main';
import { Paragraph } from 'uikit/components';
import { DiaryItemWrapper } from '../styles';
import { DiaryTitle } from './DiaryTitle';
import { DiaryDuration } from './DiaryDuration';
import { DiaryImportance } from './DiaryImportance';
import { uniqueId } from 'lodash';

export const DiaryItem = (diary: IDiary) => {
  const [isChangingTitle, setIsChangingTitle] = useState<boolean>(false);
  const [isChangingDuration, setIsChangingDuration] = useState<boolean>(false);
  const [isChangingImportance, setIsChangingImportance] = useState<boolean>(false);

  const { isMobile } = useUnit($main);
  const { timeLost } = useUnit($efficiency);

  const contextMenuItems = [
    {
      label: (
        <Paragraph
          text='Дублировать'
          theme={timeLost >= (diary?.duration || 0) ? 'primary' : 'secondary'}
          onClick={() => {
            if (timeLost >= (diary?.duration || 0)) {
              addDiary({ ...diary, id: uniqueId(), title: `${diary.title}*` });
            }
          }}
        />
      ),
      key: 'dublicate',
      disabled: timeLost < (diary?.duration || 0),
    },
    {
      label: <Paragraph text='Изменить длительность' onClick={() => setIsChangingDuration(true)} />,
      key: 'reduration',
    },
    {
      label: <Paragraph text='Изменить важность' onClick={() => setIsChangingImportance(true)} />,
      key: 'reimpotance',
    },
    {
      label: <Paragraph text='Переименовать' onClick={() => setIsChangingTitle(true)} />,
      key: 'rename',
    },
    {
      label: <Paragraph text='Удалить' onClick={() => removeDiary(diary.id)} />,
      key: 'delete',
    },
  ];

  return (
    <>
      <Dropdown menu={{ items: contextMenuItems }} trigger={['contextMenu']}>
        <div>
          <DiaryItemWrapper isMobile={isMobile}>
            <DiaryTitle
              diary={diary}
              isChangingTitle={isChangingTitle}
              setIsChangingTitle={setIsChangingTitle}
            />

            <DiaryImportance
              isChangingImportance={isChangingImportance}
              setIsChangingImportance={setIsChangingImportance}
              diary={diary}
            />

            <DiaryDuration
              diary={diary}
              isChangingDuration={isChangingDuration}
              setIsChangingDuration={setIsChangingDuration}
            />
          </DiaryItemWrapper>
        </div>
      </Dropdown>
    </>
  );
};
