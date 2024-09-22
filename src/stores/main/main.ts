import { createEvent, createStore } from "effector";
import { IMainStore } from "./types";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

export const $main = createStore<IMainStore>({
  user: {
    login: "admin",
    name: "administrator",
    id: 0,
  },
  isMobile,
  settings: {
    theme: "light",
    efficiency: 12,
  },
});

export const changeMainStore = createEvent<Partial<IMainStore>>();

$main.on(changeMainStore, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
