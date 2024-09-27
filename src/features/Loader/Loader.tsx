import { Spin } from 'antd';
import React from 'react';
import { LoaderWrapper } from './styles';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Spin />
    </LoaderWrapper>
  );
};
