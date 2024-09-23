import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  height: 100%;

  padding: 0 20px;

  overflow-y: auto;

  scrollbar-width: thin;
`;

export const DiaryItemWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;

  height: 65px;

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
        grid-template-columns: 1fr 300px 300px;
        align-items: center;
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
