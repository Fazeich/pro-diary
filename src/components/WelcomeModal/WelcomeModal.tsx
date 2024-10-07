import { Modal } from 'uikit/components';
import { useUnit } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { $main, changeServerSettingsFx, changeUserSettingsFx } from 'stores/main/main';
import { FooterWrapper } from './styles';
import { Button, notification } from 'antd';
import { Start } from './ui/Start';
import { Settings } from './ui/Settings';
import { IUserSettings } from 'stores/main/types';

export const WelcomeModal = () => {
  const { user } = useUnit($main);

  const [open, setOpen] = useState(user?.settings?.serverSettings?.isShowWelcome || false);
  const [currentStep, setCurrentStep] = useState<'start' | 'settings'>('start');
  const [settings, setSettings] = useState<Partial<IUserSettings>>({});

  const isChangingSettings = useUnit(changeUserSettingsFx.pending);

  const ModalBody = () => {
    switch (currentStep) {
      case 'start':
        return <Start />;
      case 'settings':
        return <Settings settings={settings} setSettings={setSettings} />;
      default:
        return <></>;
    }
  };

  const ModalFooter = () => {
    switch (currentStep) {
      case 'start':
        return (
          <>
            <Button
              type='link'
              onClick={() => {
                changeServerSettingsFx({
                  userId: user?.id,
                  settings: {
                    ...user.settings?.serverSettings,
                    isShowWelcome: false,
                  },
                });

                setOpen(false);
              }}
            >
              Больше не показывать
            </Button>

            <Button type='link' onClick={() => setCurrentStep('settings')}>
              Настроить
            </Button>
          </>
        );
      case 'settings':
        return (
          <>
            <Button
              type='link'
              loading={isChangingSettings}
              onClick={() => {
                changeServerSettingsFx({
                  userId: user?.id,
                  settings: {
                    ...user.settings.serverSettings,
                    ...settings,
                    isShowWelcome: false,
                  },
                })
                  .then(() => {
                    setOpen(false);

                    notification.success({
                      message: 'Настройка успешно завершена!',
                    });
                  })
                  .catch(() => {
                    notification.error({
                      message: 'Не удалось завершить настройку.\nПопробуйте позже',
                    });
                  });
              }}
            >
              Сохранить
            </Button>
          </>
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    setSettings(user.settings.userSettings);
  }, [user.settings]);

  useEffect(() => {
    if (
      user?.settings?.serverSettings?.isShowWelcome &&
      !user?.settings?.serverSettings?.isShowLearn
    ) {
      setOpen(true);
    }
  }, [user?.settings?.serverSettings?.isShowWelcome, user?.settings?.serverSettings?.isShowLearn]);

  return (
    <Modal
      title={currentStep === 'start' ? 'Добро пожаловать!' : 'Настройка'}
      open={open}
      onCancel={() => {
        setOpen(false);
      }}
      footer={() => (
        <FooterWrapper>
          <ModalFooter />
        </FooterWrapper>
      )}
    >
      <ModalBody />
    </Modal>
  );
};
