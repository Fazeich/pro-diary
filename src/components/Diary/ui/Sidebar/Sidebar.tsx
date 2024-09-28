import React from 'react';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { useUnit } from 'effector-react';
import { StyledDrawer, StyledSidebarWrapper } from './styles';
import { $main } from 'stores/main/main';
import { Button } from 'antd';
import { Paragraph } from 'uikit/components';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const { isOpen, size } = useUnit($sidebar);
  const { isMobile } = useUnit($main);

  const navigate = useNavigate();

  return (
    <StyledDrawer
      open={isOpen}
      size={size}
      placement='top'
      onClose={() => changeSidebarStore({ isOpen: false })}
      height={isMobile ? '100%' : 125}
      isMobile={isMobile}
      title='ProDiary'
      closable={isMobile}
    >
      <StyledSidebarWrapper>Настройки</StyledSidebarWrapper>
    </StyledDrawer>
  );
};
