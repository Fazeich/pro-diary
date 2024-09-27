import React, { FC } from 'react';
import { TextAreaProps } from 'antd/es/input';
import { StyledTextArea } from './styles';

export const TextArea: FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};
