import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { HTMLAttributes } from 'react';

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  tooltipTitle?: string;
  cursor?: 'default' | 'pointer' | 'move';
  theme?: 'accent' | 'primary' | 'secondary';
  size?: number;
  disabled?: boolean;
}
