import { IMPORTANCE_OPTIONS } from 'lib/constants/constants';
import React, { FC, useMemo } from 'react';
import { changeDiaryFx } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { Paragraph, Select } from 'uikit/components';
import { FlexUnwrap } from '../styles';
import { notification } from 'antd';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';

interface IProps {
  isChangingImportance: boolean;
  setIsChangingImportance: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryImportance: FC<IProps> = ({
  isChangingImportance,
  setIsChangingImportance,
  diary,
}) => {
  const { isMobile } = useUnit($main);

  const importanceLabel = useMemo(() => {
    switch (diary.importance) {
      case 'important':
        return 'Важно';
      case 'not_important':
        return 'Не важно';
      default:
        return 'Не указано';
    }
  }, [diary.importance]);

  if (isChangingImportance) {
    if (isMobile) {
      return (
        <Select
          value={diary?.importance || null}
          onChange={(value) => {
            changeDiaryFx({ _id: diary._id, importance: value }).catch((req) => {
              const errorMessage = req?.response?.data?.message;

              notification.error({
                message: errorMessage || 'Не удалось изменить важность',
              });
            });

            setIsChangingImportance(false);
          }}
          defaultOpen
          options={IMPORTANCE_OPTIONS}
          width={150}
        />
      );
    }

    return (
      <FlexUnwrap>
        <Paragraph onClick={() => setIsChangingImportance(true)} text='Важность: ' />
        <Select
          value={diary?.importance || null}
          onChange={(value) => {
            changeDiaryFx({ _id: diary._id, importance: value }).catch((req) => {
              const errorMessage = req?.response?.data?.message;

              notification.error({
                message: errorMessage || 'Не удалось изменить важность',
              });
            });

            setIsChangingImportance(false);
          }}
          defaultOpen
          options={IMPORTANCE_OPTIONS}
          width={150}
        />
      </FlexUnwrap>
    );
  }

  if (diary?.importance && !diary?.finished) {
    return (
      <Paragraph
        text={`${isMobile ? '' : 'Важность: '}${importanceLabel}`}
        style={{
          minWidth: '200px',
          maxWidth: '250px',
        }}
      />
    );
  }

  return <></>;
};
