import { DurationSelect } from 'features';
import { getHours } from 'lib/utils/getHours';
import React, { FC } from 'react';
import { changeDiaryFx } from 'stores/diary/diary';
import { IDiary } from 'stores/diary/types';
import { Paragraph } from 'uikit/components';
import { FlexUnwrap } from '../styles';
import { useUnit } from 'effector-react';
import { $efficiency } from 'stores/main/main';

interface IProps {
  isChangingDuration: boolean;
  setIsChangingDuration: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryDuration: FC<IProps> = ({ isChangingDuration, setIsChangingDuration, diary }) => {
  const { timeLost } = useUnit($efficiency);

  if (isChangingDuration) {
    return (
      <FlexUnwrap>
        <Paragraph onClick={() => setIsChangingDuration(true)} text='Длительность: ' />
        <DurationSelect
          duration={diary.duration}
          setDuration={(value) => {
            changeDiaryFx({ _id: diary._id, duration: value });

            setIsChangingDuration(false);
          }}
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
        text={`Длительность: ${diary.duration} ${getHours(diary.duration)}`}
        style={{
          minWidth: '200px',
          maxWidth: '250px',
        }}
      />
    );
  }

  return <></>;
};
