import React from 'react';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { useUnit } from 'effector-react';
import { StyledDrawer } from './styles';
import { $main, resetMainStore } from 'stores/main/main';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const { isOpen, size } = useUnit($sidebar);
  const { isMobile } = useUnit($main);
  const navigate = useNavigate();

  const handleLogout = () => {
    resetMainStore();
    localStorage.removeItem('token');

    changeSidebarStore({ isOpen: false });

    navigate('/');
  };

  return (
    <StyledDrawer
      open={isOpen}
      size={size}
      placement='top'
      onClose={() => changeSidebarStore({ isOpen: false })}
      height={isMobile ? '100%' : 250}
      isMobile={isMobile}
      title='ProDiary'
      closable={isMobile}
    >
      <Button onClick={handleLogout}>Выход</Button>
    </StyledDrawer>
  );
};
