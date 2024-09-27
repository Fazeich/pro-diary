import { SlidersOutlined } from '@ant-design/icons';
import { IIconProps } from 'lib/types/types';
import React, { FC } from 'react';
import { IconWrapper } from 'uikit/components';

export const SlidersIcon: FC<IIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <SlidersOutlined />
    </IconWrapper>
  );
};
