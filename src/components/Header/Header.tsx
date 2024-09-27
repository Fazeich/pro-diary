import React from 'react';
import { ActionsWrapper, NavigationLink, NavigationWrapper, StyledHeader } from './styles';
import { MenuCloseIcon, MenuOpenIcon } from 'uikit/icons';
import { $sidebar, changeSidebarStore } from 'stores/sidebar/sidebar';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';
import { LogoutIcon } from 'uikit/icons/LogoutIcon';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from 'stores/main/utils';
import { ThemeChanger } from 'features';

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
          noColor={false}
          text='Главная'
          active={path === 'diary'}
          onClick={() => navigate('/diary')}
        />
        <NavigationLink
          noColor={false}
          text='Архив'
          active={path === 'archive'}
          onClick={() => navigate('/archive')}
        />
      </NavigationWrapper>

      <ActionsWrapper>
        <ThemeChanger />

        <LogoutIcon
          cursor='pointer'
          tooltipTitle='Выход'
          onClick={() => {
            handleLogout();

            navigate('/');
          }}
        />
      </ActionsWrapper>
    </StyledHeader>
  );
};
