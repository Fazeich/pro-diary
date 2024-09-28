import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  height: 100%;

  overflow-y: auto;

  scrollbar-width: thin;
`;

export const DiaryItemWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;

  min-height: 65px;

  ${({ isMobile }) =>
    isMobile
      ? `
        display: flex;
        flex-direction: column;

        align-items: center;

        justify-content: center;

        `
      : `
        display: grid;

        grid-template-columns: 6fr 1fr 1fr;
        align-items: center;

        padding: 5px 20px;

        grid-gap: 20px;
      `}
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
