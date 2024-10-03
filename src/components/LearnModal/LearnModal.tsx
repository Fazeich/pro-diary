import { Modal } from 'uikit/components';
import { useUnit } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { $main, changeSettingsFx } from 'stores/main/main';
import { Button } from 'antd';
import { FooterWrapper } from './styles';
import { Welcome } from './ui/Welcome';
import { LearnMain } from './ui/LearnMain';
import { LearnArchive } from './ui/LearnArchive';
import { LearnSettings } from './ui/LearnSettings';

export const LearnModal = () => {
  const {
    user: {
      settings: { isShowLearn },
    },
  } = useUnit($main);
  const { user } = useUnit($main);

  const isChangingSettings = useUnit(changeSettingsFx.pending);

  const [open, setOpen] = useState(isShowLearn);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNotShowAnymore = () => {
    changeSettingsFx({
      userId: user?.id,
      settingsData: {
        ...user.settings,
        isShowLearn: false,
      },
    });

    setOpen(false);
  };

  const StartButton = () => {
    return (
      <>
        <Button type='link' onClick={handleNotShowAnymore}>
          Больше не показывать
        </Button>

        <Button type='link' onClick={() => setCurrentStep((prev) => prev + 1)}>
          Продолжить
        </Button>
      </>
    );
  };

  const NextButton = () => {
    return (
      <>
        <Button type='link' onClick={() => setCurrentStep((prev) => prev - 1)}>
          Назад
        </Button>

        <Button type='link' onClick={() => setCurrentStep((prev) => prev + 1)}>
          Продолжить
        </Button>
      </>
    );
  };

  const FinishButton = () => {
    return (
      <>
        <Button type='link' onClick={() => setCurrentStep((prev) => prev - 1)}>
          Назад
        </Button>

        <Button type='link' loading={isChangingSettings} onClick={handleNotShowAnymore}>
          Завершить
        </Button>
      </>
    );
  };

  const steps = [
    {
      title: 'Добро пожаловать!',
      content: <Welcome />,
      footer: <StartButton />,
    },
    {
      title: 'Главная страница',
      content: <LearnMain />,
      footer: <NextButton />,
    },
    {
      title: 'Архив',
      content: <LearnArchive />,
      footer: <NextButton />,
    },
    {
      title: 'Настройки',
      content: <LearnSettings />,
      footer: <FinishButton />,
    },
  ];

  useEffect(() => {
    if (isShowLearn) {
      setOpen(true);
    }
  }, [isShowLearn]);

  return (
    <Modal
      title={steps[currentStep].title}
      footer={() => <FooterWrapper>{steps[currentStep].footer}</FooterWrapper>}
      open={open}
      closable={false}
    >
      {steps[currentStep].content}
    </Modal>
  );
};
