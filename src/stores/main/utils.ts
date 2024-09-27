import { changeSidebarStore } from 'stores/sidebar/sidebar';
import { resetMainStore } from './main';

export const handleLogout = () => {
  resetMainStore();
  sessionStorage.removeItem('token');

  changeSidebarStore({ isOpen: false });
};
