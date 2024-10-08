import React, { FC } from 'react';
import { PlusIcon } from 'uikit/icons/PlusIcon';
import { createDiaryFx } from 'stores/diary/diary';
import { notification } from 'antd';
import { IUser } from 'stores/main/types';

interface IProps {
  user: IUser;
}

export const AddIcon: FC<IProps> = ({ user }) => {
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

  return <PlusIcon size={45} onClick={handleCreateEmptyDiary} />;
};
