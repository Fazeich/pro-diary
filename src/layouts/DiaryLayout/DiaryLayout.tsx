import React, { FC } from 'react';
import { StyledDiaryLayout } from './styles';

interface IProps {
  children: any;
}

export const DiaryLayout: FC<IProps> = ({ children }) => {
  return <StyledDiaryLayout>{children}</StyledDiaryLayout>;
};
