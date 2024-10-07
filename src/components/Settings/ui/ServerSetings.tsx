import React, { useEffect, useState } from 'react';
import { FlexWrapper, SettingsBlock } from '../lib/styles';
import { Paragraph, Select } from 'uikit/components';
import { Divider } from 'features';
import { Button, notification, Switch } from 'antd';
import { useUnit } from 'effector-react';
import { $main, changeServerSettingsFx } from 'stores/main/main';
import { IServerSettings } from 'stores/main/types';
import { getHoursOptions } from 'lib/constants/constants';
import { isEmpty } from 'lodash';

export const ServerSetings = () => {
  const { user } = useUnit($main);

  const [settings, setSettings] = useState<Partial<IServerSettings>>({});
  const { isDailyArchivating, archivatingTime } = settings;

  const isChangingSettings = useUnit(changeServerSettingsFx.pending);

  const handleApplySettings = async () => {
    await changeServerSettingsFx({
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
    if (!isEmpty(user?.settings?.serverSettings)) {
      setSettings(user?.settings?.serverSettings);
    }
  }, [user?.settings?.serverSettings]);

  return (
    <SettingsBlock>
      <Paragraph text='Серверные настройки' size={22} />

      <Divider />

      <Paragraph text='В разработке' theme='accent' />

      <FlexWrapper>
        <Paragraph text='Архивация задач раз в сутки' theme='accent' />
        <Switch
          value={isDailyArchivating}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              isDailyArchivating: checked,
            }))
          }
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Время архивации (по Мск)' theme='accent' />
        <Select
          width={135}
          value={archivatingTime}
          disabled={!isDailyArchivating}
          onChange={(value) => setSettings((prev) => ({ ...prev, archivatingTime: value }))}
          options={getHoursOptions({
            getDescription: () => ':00',
          })}
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
