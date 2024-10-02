import React from 'react';
import { ModalProps } from 'antd';
import { StyledModal } from './styles';

export const Modal = (props: ModalProps) => {
  return <StyledModal {...props}>{props?.children}</StyledModal>;
};
