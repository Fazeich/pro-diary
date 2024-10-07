import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  height: 100%;

  overflow-y: auto;

  scrollbar-width: thin;

  position: relative;
`;

export const DiaryItemWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;

  transition: all 0.15s ease-in-out;

  min-height: 65px;

  padding: 20px;

  ${({ isMobile }) => {
    if (isMobile) {
      return `
        display: flex;
        flex-direction: column;
        align-items: flext-start;
        justify-content: center;

        text-align: left;

        gap: 20px;
      `;
    }

    return `
      display: grid;

      grid-template-columns: 6fr 1fr 1fr;
      align-items: center;

      grid-gap: 20px;
    `;
  }}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary.hover};
  }
`;

export const FlexUnwrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  gap: 10px;
`;

export const NoDiaryWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const ActionsWrapper = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) => {
    if (isMobile) {
      return `
        display: flex;
        `;
    }

    return `
      display: flex;
      gap: 20px;

      align-items: center;
    `;
  }}
`;
