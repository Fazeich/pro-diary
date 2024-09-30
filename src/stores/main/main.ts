import { combine, createEffect, createEvent, createStore } from 'effector';
import {
  IAuthParams,
  IChangeSettingsParams,
  IChangeUserParams,
  IGetSettingsParams,
  IMainStore,
  ISettings,
  IUser,
} from './types';
import { $diary } from 'stores/diary/diary';
import axios from 'axios';
import { create, isEmpty } from 'lodash';

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
      isUsingEfficiency: true,
      efficiency: 6,
    },
  },
  isMobile,
});

export const changeUserFx = createEffect(async (params: IChangeUserParams) => {
  const req = await axios.post('/api/user/change', params);

  return req;
});

export const getSettingsFx = createEffect(async (params: IGetSettingsParams) => {
  const req = await axios.get<ISettings>('/api/user/settings', {
    params,
  });

  return req.data;
});

export const changeSettingsFx = createEffect(async (params: IChangeSettingsParams) => {
  const req = await axios.post<ISettings>('/api/user/settings/change', params);

  return req.data;
});

export const $efficiency = combine($main, $diary, (main, diary) => {
  const efficiency = main?.user?.settings?.efficiency;

  const isUsingEfficiency = main?.user?.settings?.isUsingEfficiency;

  const timeCost = diary?.diaries?.reduce((prev, next) => {
    return prev + Number(next?.duration || 0);
  }, 0);

  const timeLost = isUsingEfficiency ? efficiency - timeCost : Infinity;

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
  .on(getSettingsFx.done, (state, { result }) => {
    return {
      ...state,
      user: {
        ...state.user,
        settings: result,
      },
    };
  })
  .on(changeSettingsFx.done, (state, { result }) => {
    return {
      ...state,
      user: {
        ...state.user,
        settings: result,
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
