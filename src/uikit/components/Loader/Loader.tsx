import { Spin } from 'antd';
import React, { FC } from 'react';
import { LoaderWrapper } from './styles';

interface IProps {
  margin?: number;
}

export const Loader: FC<IProps> = ({ margin = 0 }) => {
  return (
    <LoaderWrapper margin={margin}>
      <Spin />
    </LoaderWrapper>
  );
};
