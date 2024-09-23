import React, { FC, HTMLAttributes } from 'react';
import { StyledParagraph } from './styles';
import { ThemeTypes } from 'lib/theme/types';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  theme?: ThemeTypes;
  text?: string;
  size?: number;
  weight?: number;
}

export const Paragraph: FC<IProps> = ({
  text = '',
  size = 18,
  weight = 500,
  theme = 'primary',
  ...props
}) => {
  return (
    <StyledParagraph size={size} weight={weight} themeType={theme} {...props}>
      {text}
    </StyledParagraph>
  );
};
