import { uniqueId } from 'lodash';
import React, { FC } from 'react';
import { IDiary } from 'stores/diary/types';
import { Diary } from './Diary';
import { Divider, Loader, Empty } from 'features';

interface IProps {
  diaries: IDiary[];
  loading: boolean;
}

export const Diaries: FC<IProps> = ({ diaries, loading }) => {
  if (loading) {
    return <Loader margin={100} />;
  }

  if (!diaries?.length) {
    <Empty description='В архиве нет завершённых задач' />;
  }

  return (
    <>
      {diaries?.map((diary) => {
        return (
          <div key={uniqueId()}>
            <Diary {...diary} />
            <Divider />
          </div>
        );
      })}
    </>
  );
};
