import { getSortedDiaries } from './utils';
import { createEffect, createEvent, createStore } from 'effector';
import { IDiary, IDiaryStore } from './types';
import { request } from 'api/api';
import axios from 'axios';

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

export const getDiariesFx = createEffect(async () => {
  const req = await axios.get<IDiary[]>('/api/diaries');

  return req.data;
});

$diary
  .on(addDiary, (state, payload) => {
    const newDiaries = getSortedDiaries([...state.diaries, payload]);

    return {
      ...state,
      diaries: newDiaries,
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
  .on(getDiariesFx.done, (state, { result }) => {
    console.log(result);
    return {
      ...state,
      // @ts-ignore
      diaries: getSortedDiaries(result.data),
    };
  })
  .on(resetNewDiary, (state) => {
    return {
      ...state,
      newDiary: init.newDiary,
    };
  });
