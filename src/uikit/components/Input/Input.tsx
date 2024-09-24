import React, { FC } from 'react';
import { StyledInput } from './styles';
import { InputProps } from 'antd';

export interface IInputProps extends InputProps {
  fontSize?: number;
}

export const Input: FC<IInputProps> = ({ fontSize = 18, ...props }) => {
  return <StyledInput style={{ fontSize: fontSize }} {...props} />;
};
