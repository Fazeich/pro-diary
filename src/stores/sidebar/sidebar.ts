import { createEvent, createStore } from 'effector';
import { ISidebarStore } from './types';

export const $sidebar = createStore<ISidebarStore>({
  isOpen: false,
  size: 'default',
});

export const changeSidebarStore = createEvent<Partial<ISidebarStore>>();

$sidebar.on(changeSidebarStore, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
