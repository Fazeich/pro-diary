import { changeSidebarStore } from 'stores/sidebar/sidebar';
import { resetMainStore } from './main';

export const handleLogout = () => {
  resetMainStore();
  localStorage.removeItem('token');

  changeSidebarStore({ isOpen: false });
};
