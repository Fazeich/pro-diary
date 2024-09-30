import { FOOTER_HEIGHT } from 'lib/constants/constants';
import styled from 'styled-components';

export const StyledFooter = styled.div<{ isMobile: boolean }>`
  background-color: ${({ theme }) => theme.primary.background};

  box-shadow: ${({ theme }) => `-2px 0 10px 0 ${theme.primary.shadow}`};

  border: ${({ theme }) => `1px solid ${theme.primary.border}`};

  min-height: ${FOOTER_HEIGHT}px;
  max-height: ${FOOTER_HEIGHT}px;

  ${({ isMobile }) => {
    if (isMobile) {
      return `
        display: flex;
  
        flex-direction: column;
  
        align-items: center;
        justify-content: center;
      `;
    }

    return `
      display: flex;
    
      align-items: center;
      justify-content: space-between;
    
      gap: 20px;
      `;
  }}

  padding: 0 20px;
`;
