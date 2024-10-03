import React, { FC } from 'react';
import { TextAreaProps } from 'antd/es/input';
import { StyledTextArea } from './styles';

interface IProps extends TextAreaProps {
  fontSize?: number;
}

export const TextArea: FC<IProps> = ({ fontSize = 18, ...props }) => {
  return (
    <StyledTextArea
      style={{
        fontSize,
      }}
      {...props}
    />
  );
};
