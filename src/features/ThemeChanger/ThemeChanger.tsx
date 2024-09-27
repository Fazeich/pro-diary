import { useUnit } from 'effector-react';
import React from 'react';
import { $theme, changeTheme } from 'stores/theme/theme';
import { MoonIcon } from 'uikit/icons/MoonIcon';
import { SlidersIcon } from 'uikit/icons/SlidersIcon';
import { SunIcon } from 'uikit/icons/SunIcon';

export const ThemeChanger = () => {
  const { theme } = useUnit($theme);

  const handleChangeTheme = () => {
    switch (theme) {
      case 'light':
        changeTheme('dark');
        break;
      case 'dark':
        changeTheme('light');
        break;
      //   changeTheme('custom');
      //   break;
      // case 'custom':
      //   changeTheme('light');
      //   break;
    }
  };

  const ThemeIcon = (props) => {
    switch (theme) {
      case 'light':
        return <MoonIcon {...props} />;
      case 'dark':
        return <SunIcon {...props} />;
      case 'custom':
        return <SlidersIcon {...props} />;
    }
  };

  return (
    <div onClick={handleChangeTheme}>
      <ThemeIcon cursor='pointer' />
    </div>
  );
};
