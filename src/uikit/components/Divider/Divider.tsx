import React, { FC } from 'react';
import { StyledDivider } from './styles';

interface IProps {
  margin?: number;
}

export const Divider: FC<IProps> = ({ margin = 0 }) => {
  return <StyledDivider style={{ margin }} />;
};
