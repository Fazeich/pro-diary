import { PlusCircleOutlined } from '@ant-design/icons';
import { IIconProps } from 'lib/types/types';
import React, { FC } from 'react';
import { IconWrapper } from 'uikit/components';

export const PlusIcon: FC<IIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <PlusCircleOutlined />
    </IconWrapper>
  );
};
