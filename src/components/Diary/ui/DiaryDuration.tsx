import { DurationSelect } from 'features';
import { getHourDescription } from 'lib/utils/getHours';
import React, { FC } from 'react';
import { changeDiaryFx } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { Paragraph } from 'uikit/components';
import { FlexUnwrap } from '../styles';
import { useUnit } from 'effector-react';
import { $efficiency, $main } from 'stores/main/main';
import { notification } from 'antd';

interface IProps {
  isChangingDuration: boolean;
  setIsChangingDuration: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryDuration: FC<IProps> = ({ isChangingDuration, setIsChangingDuration, diary }) => {
  const { timeLost } = useUnit($efficiency);
  const { isMobile } = useUnit($main);

  const handleChangeDuration = (value: number) => {
    changeDiaryFx({ _id: diary._id, duration: value }).catch((req) => {
      const errorMessage = req?.response?.data?.message;

      notification.error({
        message: errorMessage || 'Не удалось изменить длительность',
      });
    });

    setIsChangingDuration(false);
  };

  if (isChangingDuration) {
    if (isMobile) {
      return (
        <DurationSelect
          duration={diary.duration}
          setDuration={handleChangeDuration}
          onBlur={() => setIsChangingDuration(false)}
          onClick={(e) => e.stopPropagation()}
          defaultOpen
          width={150}
          getDisabledOption={(option) => {
            return Number(option.value) > timeLost;
          }}
        />
      );
    }

    return (
      <FlexUnwrap>
        <Paragraph onClick={() => setIsChangingDuration(true)} text='Длительность: ' />
        <DurationSelect
          duration={diary.duration}
          setDuration={handleChangeDuration}
          onBlur={() => setIsChangingDuration(false)}
          defaultOpen
          width={150}
          getDisabledOption={(option) => {
            return Number(option.value) > timeLost;
          }}
        />
      </FlexUnwrap>
    );
  }

  if (diary?.duration && !diary?.finished) {
    return (
      <Paragraph
        text={`${isMobile ? '' : 'Длительность: '}${diary.duration} ${getHourDescription(diary.duration)}`}
        className='min-w-[200px] max-w-[250px] select-none'
      />
    );
  }

  return <></>;
};
