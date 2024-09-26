import React from 'react';
import { NavigationLink, NavigationWrapper, StyledHeader } from './styles';
import { MenuCloseIcon, MenuOpenIcon } from 'uikit/icons';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';
import { LogoutIcon } from 'uikit/icons/LogoutIcon';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from 'stores/main/utils';

export const Header = () => {
  const { isOpen } = useUnit($sidebar);
  const { isMobile } = useUnit($main);
  const navigate = useNavigate();

  const path = location.pathname.split('/')[1];

  return (
    <StyledHeader isMobile={isMobile}>
      {isOpen ? (
        <MenuCloseIcon cursor='pointer' onClick={() => changeSidebarStore({ isOpen: false })} />
      ) : (
        <MenuOpenIcon cursor='pointer' onClick={() => changeSidebarStore({ isOpen: true })} />
      )}

      <NavigationWrapper>
        <NavigationLink
          text='Главная'
          active={path === 'diary'}
          onClick={() => navigate('/diary')}
        />
        <NavigationLink
          text='Архив'
          active={path === 'archive'}
          onClick={() => navigate('/archive')}
        />
      </NavigationWrapper>

      <LogoutIcon
        cursor='pointer'
        onClick={() => {
          handleLogout();

          navigate('/');
        }}
      />
    </StyledHeader>
  );
};
