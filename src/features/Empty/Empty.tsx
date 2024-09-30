import React from 'react';
import { StyledEmpty } from './styles';
import { EmptyProps } from 'antd';

export const Empty = (props: EmptyProps) => {
  return <StyledEmpty {...props} />;
};
