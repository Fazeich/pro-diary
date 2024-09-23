import { IDiary } from './types';

export const sortDiariesDuration = (prevDiary: IDiary, nextDiary: IDiary) => {
  if (Number(prevDiary?.duration || 0) > Number(nextDiary?.duration || 0)) {
    return 1;
  }

  if (Number(prevDiary?.duration || 0) < Number(nextDiary?.duration || 0)) {
    return -1;
  }

  return 0;
};
