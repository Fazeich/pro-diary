import { combine, createEvent, createStore } from 'effector';
import { IMainStore } from './types';
import { $diary } from 'stores/diary/diary';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

export const $main = createStore<IMainStore>({
  user: {
    login: 'admin',
    name: 'administrator',
    id: 0,
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

export const changeMainStore = createEvent<Partial<IMainStore>>();

$main.on(changeMainStore, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
