import React from 'react';
import { StyledFooter } from './styles';
import { useUnit } from 'effector-react';
import { Input, Paragraph, Select } from 'uikit/components';
import { SendIcon } from 'uikit/icons';
import { $diary, changeNewDiary, createDiaryFx, resetNewDiary } from 'stores/diary/diary';
import { DurationSelect } from 'features';
import { $efficiency, $main } from 'stores/main/main';
import { IMPORTANCE_OPTIONS } from 'lib/constants/constants';
import { PlusIcon } from 'uikit/icons/PlusIcon';
import { notification } from 'antd';

export const Footer = () => {
  const { newDiary } = useUnit($diary);
  const { timeLost } = useUnit($efficiency);
  const { isMobile } = useUnit($main);
  const { user } = useUnit($main);

  const isDisabledAdding = Number(newDiary?.duration || 0) > timeLost;

  const handleAddDiary = () => {
    if (!!newDiary?.title && !isDisabledAdding) {
      createDiaryFx({ diary: newDiary, userId: user.id }).catch((req) => {
        const errorMessage = req?.response?.data?.message;

        notification.error({
          message: errorMessage || 'Не удалось создать задачу',
        });
      });

      resetNewDiary();
    }
  };

  const handleCreateEmptyDiary = () => {
    createDiaryFx({
      diary: {
        title: '',
      },
      userId: user.id,
    }).catch((req) => {
      const errorMessage = req?.response?.data?.message;

      notification.error({
        message: errorMessage || 'Не удалось создать задачу',
      });
    });
  };

  if (isMobile) {
    return (
      <StyledFooter isMobile={isMobile}>
        <PlusIcon size={45} theme='accent' onClick={handleCreateEmptyDiary} cursor='pointer' />
      </StyledFooter>
    );
  }

  return (
    <StyledFooter isMobile={isMobile}>
      {user?.settings?.isUsingEfficiency && (
        <Paragraph
          text={`Оставшееся время: ${timeLost}`}
          theme='accent'
          style={{
            minWidth: '200px',
          }}
        />
      )}

      <Input
        placeholder='Что необходимо сделать?'
        value={newDiary?.title || ''}
        onChange={({ target: { value } }) => changeNewDiary({ title: value })}
        onPressEnter={handleAddDiary}
        width={'70%'}
      />

      <Select
        value={newDiary?.importance}
        options={IMPORTANCE_OPTIONS}
        placement='topLeft'
        width={250}
        placeholder='Важность'
        onChange={(value) => changeNewDiary({ importance: value })}
      />

      <DurationSelect
        placeholder='Длительность'
        placement='topLeft'
        duration={newDiary?.duration}
        setDuration={(value) => changeNewDiary({ duration: value })}
        width={250}
        getDisabledOption={(option) => Number(option.value) > timeLost}
      />

      <SendIcon
        cursor='pointer'
        disabled={!newDiary?.title || isDisabledAdding}
        onClick={handleAddDiary}
      />
    </StyledFooter>
  );
};
