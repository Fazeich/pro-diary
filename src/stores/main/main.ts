import { combine, createEffect, createEvent, createStore } from 'effector';
import { IAuthParams, IMainStore } from './types';
import { $diary } from 'stores/diary/diary';
import axios from 'axios';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

export const $main = createStore<IMainStore>({
  user: {
    login: '',
    name: '',
    id: undefined,
  },
  isMobile,
  settings: {
    theme: 'light',
    efficiency: 12,
  },
});

export const $efficiency = combine($main, $diary, (main, diary) => {
  const efficiency = main?.settings?.efficiency;

  const timeCost = diary?.diaries?.reduce((prev, next) => {
    return prev + Number(next.duration) || 0;
  }, 0);

  const timeLost = efficiency - timeCost;

  return {
    efficiency,
    timeCost,
    timeLost,
  };
});

export const registerFx = createEffect((params: IAuthParams) => {
  return axios.post<{ message: string }>('/api/reg', params);
});

export const authFx = createEffect(async (params: IAuthParams) => {
  return axios.post<{ token: string; userId: string }>('/api/auth', params);
});

export const changeMainStore = createEvent<Partial<IMainStore>>();

$main.on(changeMainStore, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
