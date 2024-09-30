import { Modal } from 'uikit/components';
import { useUnit } from 'effector-react';
import React, { useEffect, useMemo, useState } from 'react';
import { $main, changeSettingsFx } from 'stores/main/main';
import { Paragraph } from 'uikit/components';
import { FooterWrapper } from './styles';
import { Button, notification } from 'antd';
import { Start } from './ui/Start';
import { Settings } from './ui/Settings';
import { ISettings } from 'stores/main/types';

export const WelcomeModal = () => {
  const {
    user: {
      settings: { isShowWelcome },
    },
  } = useUnit($main);
  const { user } = useUnit($main);

  const [open, setOpen] = useState(isShowWelcome);
  const [currentStep, setCurrentStep] = useState<'start' | 'settings'>('start');
  const [settings, setSettings] = useState<Partial<ISettings>>({});

  const isChangingSettings = useUnit(changeSettingsFx.pending);

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
                changeSettingsFx({
                  userId: user?.id,
                  settingsData: {
                    ...user.settings,
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
                changeSettingsFx({
                  userId: user?.id,
                  settingsData: {
                    ...user.settings,
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
    setSettings(user.settings);
  }, [user.settings]);

  useEffect(() => {
    if (isShowWelcome) {
      setOpen(true);
    }
  }, [isShowWelcome]);

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
