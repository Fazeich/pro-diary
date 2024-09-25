import { getSortedDiaries } from './utils';
import { createEffect, createEvent, createStore } from 'effector';
import {
  ICreateDiaryParams,
  IDeleteDiaryParams,
  IDiary,
  IDiaryStore,
  IGetDiaryParams,
} from './types';
import axios from 'axios';

const init: IDiaryStore = {
  diaries: [],
  newDiary: {
    title: '',
    duration: undefined,
    importance: undefined,
  },
};

export const $diary = createStore<IDiaryStore>(init);

export const changeNewDiary = createEvent<Partial<IDiary>>();

export const resetNewDiary = createEvent();

export const getDiariesFx = createEffect(async (params: IGetDiaryParams) => {
  const req = await axios.get<IDiary[]>('/api/diaries', {
    params,
  });

  if (req?.data) {
    return req.data;
  }
});

export const createDiaryFx = createEffect(async (params: ICreateDiaryParams) => {
  const req = await axios.post<IDiary[]>('/api/diaries/create', params);

  if (req?.data) {
    return req.data;
  }
});

export const changeDiaryFx = createEffect(async (params: IDiary) => {
  const req = await axios.put(`/api/diaries/${params?._id}`, params);

  return req;
});

export const deleteDiaryFx = createEffect(async ({ diaryId }: IDeleteDiaryParams) => {
  const req = await axios.delete(`/api/diaries/${diaryId}`, {
    params: {
      id: diaryId,
    },
  });

  return req;
});

export const finishDiaryFx = createEffect(async ({ diaryId }: IDeleteDiaryParams) => {
  const req = await axios.post('/api/diaries/finish', { id: diaryId });

  return req;
});

export const returnDiaryFx = createEffect(async ({ diaryId }: IDeleteDiaryParams) => {
  const req = await axios.post('/api/diaries/return', { id: diaryId });

  return req;
});

$diary
  .on(changeNewDiary, (state, payload) => {
    return {
      ...state,
      newDiary: {
        ...state.newDiary,
        ...payload,
      },
    };
  })
  .on(getDiariesFx.done, (state, { result }) => {
    return {
      ...state,
      // @ts-ignore
      diaries: getSortedDiaries(result.data),
    };
  })
  .on(createDiaryFx.done, (state, { result }) => {
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
  })
  .watch(console.log);
