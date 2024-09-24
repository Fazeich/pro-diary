import React, { FC } from 'react';
import { StyledIconWrapper } from './styles';
import { Tooltip } from 'antd';
import { IIconProps } from 'lib/types/types';

interface IProps extends IIconProps {
  children: React.ReactNode;
}

export const IconWrapper: FC<IProps> = ({
  children,
  size = 24,
  theme = 'primary',
  cursor = 'default',
  tooltipTitle = '',
  disabled = false,
  ...props
}) => {
  if (disabled) {
    return (
      <StyledIconWrapper size={size} themeType={'secondary'} cursor={'default'} disabled>
        {children}
      </StyledIconWrapper>
    );
  }

  return (
    <StyledIconWrapper size={size} themeType={theme} cursor={cursor} disabled={disabled} {...props}>
      <Tooltip title={tooltipTitle} placement='topLeft' arrow={true} forceRender>
        {children}
      </Tooltip>
    </StyledIconWrapper>
  );
};
