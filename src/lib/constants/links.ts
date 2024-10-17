import { uniqueId } from 'lodash';

export interface ILink {
  title: string;
  url: string;
  id: string;
}

export const LINKS: ILink[] = [
  {
    title: 'Главная',
    url: 'diary',
    id: uniqueId(),
  },
  {
    title: 'Архив',
    url: 'archive',
    id: uniqueId(),
  },
  {
    title: 'Настройки',
    url: 'settings',
    id: uniqueId(),
  },
  // {
  //   title: 'Профиль',
  //   url: 'profile',
  //   id: uniqueId(),
  // },
];
