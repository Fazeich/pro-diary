import React, { useEffect, useState } from 'react';
import { ArciveWrapper, StyledTabs } from './styles';
import { Diaries } from './ui/Diaries';
import {
  $diary,
  getArchivedFinishedDiariesFx,
  getArchivedUnfinishedDiariesFx,
} from 'stores/diary/diary';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';

export const Archive = () => {
  const { user } = useUnit($main);
  const {
    archive: { finished = [], unfinished = [] },
  } = useUnit($diary);

  const isGettingFinished = useUnit(getArchivedFinishedDiariesFx.pending);
  const isGettingUnfinished = useUnit(getArchivedUnfinishedDiariesFx.pending);

  const [activeKey, setActiveKey] = useState<string>('finished');

  const tabs = [
    {
      key: 'finished',
      label: 'Завершённые задачи',
      children: <Diaries diaries={finished} loading={isGettingFinished} />,
    },
    {
      key: 'unfinished',
      label: 'Незавершённые задачи',
      children: <Diaries diaries={unfinished} loading={isGettingUnfinished} />,
    },
  ];

  useEffect(() => {
    if (user?.id) {
      if (activeKey === 'finished') {
        getArchivedFinishedDiariesFx({ userId: user.id });
      }
      if (activeKey === 'unfinished') {
        getArchivedUnfinishedDiariesFx({ userId: user.id });
      }
    }
  }, [user?.id, activeKey]);

  return (
    <ArciveWrapper>
      <StyledTabs items={tabs} activeKey={activeKey} onChange={setActiveKey} />
    </ArciveWrapper>
  );
};
