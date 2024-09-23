import React from 'react';
import { StyledHeader } from './styles';
import { MenuClose, MenuOpen } from 'uikit/icons';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { Input } from 'uikit/components';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';

export const Header = () => {
  const { isOpen } = useUnit($sidebar);
  const { isMobile } = useUnit($main);

  return (
    <StyledHeader isMobile={isMobile}>
      {isOpen ? (
        <MenuClose cursor='pointer' onClick={() => changeSidebarStore({ isOpen: false })} />
      ) : (
        <MenuOpen cursor='pointer' onClick={() => changeSidebarStore({ isOpen: true })} />
      )}

      <Input />
    </StyledHeader>
  );
};
