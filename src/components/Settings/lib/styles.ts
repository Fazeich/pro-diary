import styled from 'styled-components';

export const SettingsWrapper = styled.div<{ isMobile: boolean }>`
  padding: 20px;

  display: grid;

  ${({ isMobile }) => {
    if (isMobile) {
      return `
        grid-template-rows: 1fr 1fr;
      `;
    }

    return `
      grid-template-columns: 1fr 1fr;
    `;
  }}

  gap: ${({ isMobile }) => (isMobile ? '40px' : '20px')};
`;

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
