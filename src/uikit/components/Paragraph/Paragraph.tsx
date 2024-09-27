import React, { FC, HTMLAttributes } from 'react';
import { StyledParagraph } from './styles';
import { ThemeTypes } from 'lib/theme/types';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  theme?: ThemeTypes;
  text?: string;
  size?: number;
  weight?: number;
  noColor?: boolean;
}

export const Paragraph: FC<IProps> = ({
  text = '',
  size = 18,
  weight = 500,
  noColor = false,
  theme = 'primary',
  ...props
}) => {
  return (
    <StyledParagraph size={size} weight={weight} themeType={theme} noColor={noColor} {...props}>
      {text}
    </StyledParagraph>
  );
};
