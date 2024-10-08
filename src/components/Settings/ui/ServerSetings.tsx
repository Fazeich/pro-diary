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
import { InfoCircleFilled, InfoCircleOutlined } from '@ant-design/icons';

export const ServerSetings = () => {
  const { user } = useUnit($main);

  const [settings, setSettings] = useState<Partial<IServerSettings>>({});
  const { isDailyArchivating, archivatingTime, isDailyClearArchive } = settings;

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
      .catch((a) => {
        console.log(a);
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

      <FlexWrapper>
        <Paragraph text='Автоматическая архивация' theme='accent' />
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
        <Paragraph text='Автоматическое удаление' theme='accent' />
        <Switch
          value={isDailyClearArchive}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              isDailyClearArchive: checked,
            }))
          }
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Время архивации (по Мск)' theme='accent' />
        <Select
          width={135}
          value={archivatingTime}
          disabled={!isDailyArchivating || true}
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
