import { notification } from 'antd';
import { useUnit } from 'effector-react';
import React, { FC, useState } from 'react';
import { changeDiaryFx } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { $main } from 'stores/main/main';
import { Input, Paragraph, TextArea } from 'uikit/components';

interface IProps {
  isChangingTitle: boolean;
  setIsChangingTitle: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryTitle: FC<IProps> = ({ isChangingTitle, setIsChangingTitle, diary }) => {
  const { isMobile } = useUnit($main);
  const [title, setTitle] = useState<string>(diary?.title || '');

  const handleChangeTitle = () => {
    changeDiaryFx({
      _id: diary._id,
      title,
    }).catch((req) => {
      const errorMessage = req?.response?.data?.message;

      notification.error({
        message: errorMessage || 'Не удалось изменить название',
      });
    });

    setIsChangingTitle(false);
  };

  if (isChangingTitle) {
    if (isMobile) {
      return (
        <TextArea
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          onPressEnter={handleChangeTitle}
          onBlur={handleChangeTitle}
          onClick={(e) => e.stopPropagation()}
          autoSize
        />
      );
    }

    return (
      <Input
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        onPressEnter={handleChangeTitle}
        onBlur={handleChangeTitle}
      />
    );
  }

  return (
    <Paragraph
      text={diary?.title || '*Пустая цель*'}
      className={`break-words ${diary?.finished ? 'line-through' : ''} select-none`}
    />
  );
};
