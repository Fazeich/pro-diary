import React, { useEffect, useState } from 'react';
import { SettingsBlock, FlexWrapper } from '../lib/styles';
import { Paragraph, Select } from 'uikit/components';
import { Divider } from 'features';
import { Button, notification, Switch } from 'antd';
import { useUnit } from 'effector-react';
import { $main, changeUserSettingsFx } from 'stores/main/main';
import { getHoursOptions } from 'lib/constants/constants';
import { getHourDescription } from 'lib/utils/getHours';
import { IUserSettings } from 'stores/main/types';
import { isEmpty } from 'lodash';

export const UserSettings = () => {
  const { user } = useUnit($main);

  const [settings, setSettings] = useState<Partial<IUserSettings>>({});

  const { efficiency = null, isUsingEfficiency = false } = settings;

  const isChangingSettings = useUnit(changeUserSettingsFx.pending);

  const handleApplySettings = async () => {
    await changeUserSettingsFx({
      userId: user.id,
      settings,
    })
      .then(() => {
        notification.success({
          message: 'Настройки успешно изменены!',
        });
      })
      .catch(() => {
        notification.error({
          message: 'Не удалось изменить настройки.\nПопробуйте позже',
        });
      });
  };

  useEffect(() => {
    if (!isEmpty(user?.settings?.userSettings)) {
      setSettings(user?.settings?.userSettings);
    }
  }, [user?.settings?.userSettings]);

  return (
    <SettingsBlock>
      <Paragraph text='Пользовательские настройки' size={22} />

      <Divider />

      <FlexWrapper>
        <Paragraph text='Эффективность' theme='accent' />
        <Switch
          value={isUsingEfficiency}
          disabled={isChangingSettings}
          onChange={(value) => setSettings((prev) => ({ ...prev, isUsingEfficiency: value }))}
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Время для выполнения' theme='accent' />
        <Select
          value={efficiency}
          onChange={(value) => setSettings((prev) => ({ ...prev, efficiency: value }))}
          disabled={isChangingSettings || !isUsingEfficiency}
          width={135}
          options={getHoursOptions({ getDescription: (item) => getHourDescription(item) })}
        />
      </FlexWrapper>

      <Button
        type='primary'
        size='large'
        loading={isChangingSettings}
        onClick={handleApplySettings}
        className='w-fit'
      >
        Сохранить
      </Button>
    </SettingsBlock>
  );
};
