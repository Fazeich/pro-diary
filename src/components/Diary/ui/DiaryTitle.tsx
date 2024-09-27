import { notification } from 'antd';
import React, { FC, useState } from 'react';
import { changeDiaryFx } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { Input, Paragraph } from 'uikit/components';
import { CheckIcon } from 'uikit/icons';

interface IProps {
  isChangingTitle: boolean;
  setIsChangingTitle: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryTitle: FC<IProps> = ({ isChangingTitle, setIsChangingTitle, diary }) => {
  const [title, setTitle] = useState<string>(diary?.title || '');

  const handleChangeTitle = () => {
    changeDiaryFx({
      _id: diary._id,
      title,
    }).catch((req) => {
      const errorMessage = req?.response?.data?.message;

      notification.error({
        message: errorMessage || 'Ошибка при получении задач. \nПовторите попытку позже',
      });
    });

    setIsChangingTitle(false);
  };

  if (isChangingTitle) {
    return (
      <Input
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        onPressEnter={handleChangeTitle}
        suffix={<CheckIcon cursor='pointer' onClick={handleChangeTitle} />}
        width={'80%'}
      />
    );
  }
  return (
    <Paragraph
      text={diary?.title || '*Пустая цель*'}
      style={{
        wordBreak: 'break-all',
        textDecoration: diary?.finished ? 'line-through' : 'none',
      }}
    />
  );
};
