import { sortDiariesDuration } from './utils';
import { createEvent, createStore } from 'effector';
import { IDiary, IDiaryStore } from './types';

const init: IDiaryStore = {
  diaries: [],
  newDiary: {
    title: '',
    duration: 1,
    importance: null,
  },
};

export const $diary = createStore<IDiaryStore>(init);

export const addDiary = createEvent<IDiary>();

export const removeDiary = createEvent<React.Key>();

export const changeNewDiary = createEvent<Partial<IDiary>>();

export const changeDiary = createEvent<IDiary>();

export const resetNewDiary = createEvent();

$diary
  .on(addDiary, (state, payload) => {
    const newDiaries = [...state.diaries, payload];

    const importantDiaries = newDiaries
      .filter((diary) => diary.importance === 'important')
      .sort(sortDiariesDuration);
    const notImportantDiaries = newDiaries
      .filter((diary) => diary.importance === 'not_important')
      .sort(sortDiariesDuration);
    const otherDiaries = newDiaries
      .filter(
        (diary) => diary.importance === undefined || diary.importance === null || !diary.importance
      )
      .sort(sortDiariesDuration);

    return {
      ...state,
      diaries: [...importantDiaries, ...notImportantDiaries, ...otherDiaries],
    };
  })
  .on(removeDiary, (state, payload) => {
    return {
      ...state,
      diaries: state.diaries.filter((diary) => diary.id !== payload),
    };
  })
  .on(changeNewDiary, (state, payload) => {
    return {
      ...state,
      newDiary: {
        ...state.newDiary,
        ...payload,
      },
    };
  })
  .on(changeDiary, (state, payload) => {
    return {
      ...state,
      diaries: state.diaries.map((diary) => {
        if (diary.id === payload.id) {
          return payload;
        }

        return diary;
      }),
    };
  })
  .on(resetNewDiary, (state) => {
    return {
      ...state,
      newDiary: init.newDiary,
    };
  });
