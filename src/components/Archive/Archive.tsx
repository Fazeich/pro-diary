import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react';
import { ArciveWrapper, StyledTabs } from './styles';
import { Diaries } from './ui/Diaries';
import {
  $diary,
  deleteDiaryFx,
  getArchivedFinishedDiariesFx,
  getArchivedUnfinishedDiariesFx,
  unarchiveDiaryFx,
} from 'stores/diary/diary';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';
import { notification } from 'antd';

export const Archive = () => {
  const { user } = useUnit($main);
  const {
    archive: { finished = [], unfinished = [] },
  } = useUnit($diary);

  const isGettingFinished = useUnit(getArchivedFinishedDiariesFx.pending);
  const isGettingUnfinished = useUnit(getArchivedUnfinishedDiariesFx.pending);

  const isUnarchivingDiary = useUnit(unarchiveDiaryFx.pending);
  const isDeletingDiary = useUnit(deleteDiaryFx.pending);

  const isPendingsDiary = isUnarchivingDiary || isDeletingDiary;

  const [activeKey, setActiveKey] = useState<string>('finished');

  const tabs = [
    {
      key: 'finished',
      label: 'Завершённые задачи',
      children: <Diaries diaries={finished} loading={isGettingFinished || isPendingsDiary} />,
    },
    {
      key: 'unfinished',
      label: 'Незавершённые задачи',
      children: <Diaries diaries={unfinished} loading={isGettingUnfinished || isPendingsDiary} />,
    },
  ];

  useInsertionEffect(() => {
    if (user?.id && !isPendingsDiary) {
      if (activeKey === 'finished') {
        getArchivedFinishedDiariesFx({ userId: user.id }).catch((req) => {
          const errorMessage = req?.response?.data?.message;

          notification.error({
            message: errorMessage || 'Не удалось получить список задач',
          });
        });
      }
      if (activeKey === 'unfinished') {
        getArchivedUnfinishedDiariesFx({ userId: user.id }).catch((req) => {
          const errorMessage = req?.response?.data?.message;

          notification.error({
            message: errorMessage || 'Не удалось получить список задач',
          });
        });
      }
    }
  }, [user?.id, activeKey, isPendingsDiary]);

  return (
    <ArciveWrapper>
      <StyledTabs items={tabs} activeKey={activeKey} onChange={setActiveKey} />
    </ArciveWrapper>
  );
};
