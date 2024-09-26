import { Divider, Empty, Spin } from 'antd';
import { uniqueId } from 'lodash';
import React, { FC } from 'react';
import { IDiary } from 'stores/diary/types';
import { Paragraph } from 'uikit/components';
import { DiaryItemWrapper } from '../styles';

interface IProps {
  diaries: IDiary[];
  loading: boolean;
}

export const Diaries = ({ diaries, loading }: IProps) => {
  if (loading) {
    return <Spin />;
  }

  if (!diaries?.length) {
    <Empty description='В архиве нет завершённых задач' />;
  }

  return (
    <>
      {diaries?.map((diary) => {
        return (
          <>
            <DiaryItemWrapper>
              <Paragraph text={diary?.title} key={uniqueId()} />
            </DiaryItemWrapper>
            <Divider
              key={uniqueId()}
              style={{
                margin: 0,
              }}
            />
          </>
        );
      })}
    </>
  );
};
