import { Dropdown } from 'antd';
import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { IDiary } from 'stores/diary/types';
import { $efficiency, $main } from 'stores/main/main';
import { Paragraph } from 'uikit/components';
import { DiaryItemWrapper } from '../styles';
import { DiaryTitle } from './DiaryTitle';
import { DiaryDuration } from './DiaryDuration';
import { DiaryImportance } from './DiaryImportance';
import { cloneDeep } from 'lodash';
import {
  archiveDiaryFx,
  createDiaryFx,
  deleteDiaryFx,
  finishDiaryFx,
  returnDiaryFx,
} from 'stores/diary/diary';
import { useContextMenu } from '../lib/useContextMenu';

export const DiaryItem = (diary: IDiary) => {
  const [isChangingTitle, setIsChangingTitle] = useState<boolean>(false);
  const [isChangingDuration, setIsChangingDuration] = useState<boolean>(false);
  const [isChangingImportance, setIsChangingImportance] = useState<boolean>(false);

  const { isMobile } = useUnit($main);

  const context = useContextMenu({
    diary,
  });

  const additionalContext = [
    {
      label: <Paragraph text='Изменить название' onClick={() => setIsChangingTitle(true)} />,
      key: 'rename',
    },
    {
      label: <Paragraph text='Изменить длительность' onClick={() => setIsChangingDuration(true)} />,
      key: 'reduration',
    },
    {
      label: <Paragraph text='Изменить важность' onClick={() => setIsChangingImportance(true)} />,
      key: 'reimpotance',
    },
  ];

  return (
    <>
      <Dropdown trigger={['contextMenu']} menu={{ items: [...context, ...additionalContext] }}>
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
      </Dropdown>
    </>
  );
};
