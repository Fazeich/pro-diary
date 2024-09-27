import { combine, createEffect, createEvent, createStore } from 'effector';
import { IAuthParams, IMainStore, IUser } from './types';
import { $diary } from 'stores/diary/diary';
import axios from 'axios';
import { isEmpty } from 'lodash';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

export const $main = createStore<IMainStore>({
  user: {
    login: '',
    name: '',
    id: undefined,

    settings: {
      efficiency: 12,
    },
  },
  isMobile,
});

export const $efficiency = combine($main, $diary, (main, diary) => {
  const efficiency = main?.user?.settings?.efficiency;

  const timeCost = diary?.diaries?.reduce((prev, next) => {
    return prev + Number(next?.duration || 0);
  }, 0);

  const timeLost = efficiency - timeCost;

  return {
    efficiency,
    timeCost,
    timeLost,
  };
});

export const registerFx = createEffect(async (params: IAuthParams) => {
  return await axios.post<{ message: string }>('/api/reg', params);
});

export const authFx = createEffect(async (params: IAuthParams) => {
  return await axios.post<{ token: string; user: IUser }>('/api/auth', params);
});

export const getMeFx = createEffect(async () => {
  const token = sessionStorage.getItem('token');

  if (token) {
    const req = await axios.post<{ user: IUser }>('/api/me', {
      token,
    });

    if (!isEmpty(req?.data?.user)) {
      return req.data.user;
    }
  }
});

export const changeMainStore = createEvent<Partial<IMainStore>>();

export const changeToken = createEvent<string>();

export const resetMainStore = createEvent();

$main
  .on(changeMainStore, (state, payload) => {
    return {
      ...state,
      ...payload,
    };
  })
  .on(changeToken, (state, payload) => {
    return {
      ...state,
      token: payload,
    };
  })
  .on(authFx.done, (state, { result }) => {
    const {
      data: { token = '', user },
    } = result;

    sessionStorage.setItem('token', token);

    return {
      ...state,
      user: {
        ...state.user,
        ...user,
      },
    };
  })
  .on(getMeFx.done, (state, { result }) => {
    return {
      ...state,
      user: result,
    };
  })
  .reset(resetMainStore);
