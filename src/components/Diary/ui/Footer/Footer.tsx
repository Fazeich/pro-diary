import React from 'react';
import { StyledFooter } from './styles';
import { useUnit } from 'effector-react';
import { Input, Paragraph, Select } from 'uikit/components';
import { SendIcon } from 'uikit/icons';
import { $diary, changeNewDiary, createDiaryFx, resetNewDiary } from 'stores/diary/diary';
import { DurationSelect } from 'features';
import { $efficiency, $main } from 'stores/main/main';
import { IMPORTANCE_OPTIONS } from 'lib/constants/constants';
import { notification } from 'antd';
import { getHourDescription } from 'lib/utils/getHours';
import { PlusIcon } from 'uikit/icons/PlusIcon';
import { AddIcon } from './AddIcon';

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

  const getEfficincyDescription = () => {
    if (timeLost > 0) {
      return `Оставшееся время: ${timeLost} ${getHourDescription(timeLost)}`;
    }

    if (timeLost === 0) {
      return 'Время заполнено';
    }

    if (timeLost < 0) {
      return `Просрочено на: ${Math.abs(timeLost)} ${getHourDescription(Math.abs(timeLost))}`;
    }
  };

  if (isMobile) {
    return (
      <StyledFooter isMobile={isMobile}>
        <AddIcon user={user} />
      </StyledFooter>
    );
  }

  return (
    <StyledFooter isMobile={isMobile}>
      {user?.settings?.userSettings?.isUsingEfficiency && (
        <Paragraph
          text={getEfficincyDescription()}
          theme='accent'
          className='min-w-[175px] max-w-[250px] w-full'
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
