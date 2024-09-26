import React from 'react';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { useUnit } from 'effector-react';
import { StyledDrawer, StyledSidebarWrapper } from './styles';
import { $main } from 'stores/main/main';
import { Button } from 'antd';
import { router } from 'lib/constants/router';

export const Sidebar = () => {
  const { isOpen, size } = useUnit($sidebar);
  const { isMobile } = useUnit($main);

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
      <StyledSidebarWrapper>
        <Button onClick={() => {}} type='primary'>
          Архив
        </Button>
      </StyledSidebarWrapper>
    </StyledDrawer>
  );
};
