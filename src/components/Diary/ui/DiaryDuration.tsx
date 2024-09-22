import { DurationSelect } from "features";
import { getHours } from "lib/utils/getHours";
import React, { FC } from "react";
import { $diary, changeDiary } from "stores/diary/diary";
import { IDiary } from "stores/diary/types";
import { Paragraph } from "uikit/components";
import { FlexUnwrap } from "../styles";
import { useUnit } from "effector-react";
import { $main } from "stores/main/main";

interface IProps {
  isChangingDuration: boolean;
  setIsChangingDuration: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryDuration: FC<IProps> = ({
  isChangingDuration,
  setIsChangingDuration,
  diary,
}) => {
  const {
    settings: { efficiency },
  } = useUnit($main);
  const { diaries } = useUnit($diary);

  const timeCost = diaries?.reduce((prev, next) => {
    return prev + Number(next.duration) || 0;
  }, 0);

  if (isChangingDuration) {
    return (
      <FlexUnwrap>
        <Paragraph
          onClick={() => setIsChangingDuration(true)}
          text="Длительность: "
        />
        <DurationSelect
          duration={diary.duration}
          setDuration={(value) => {
            changeDiary({ ...diary, duration: value });
            setIsChangingDuration(false);
          }}
          defaultOpen
          width={150}
          getDisabledOption={(option) => {
            const timeLost = efficiency - timeCost;

            return Number(option.value) > timeLost;
          }}
        />
      </FlexUnwrap>
    );
  }

  return (
    <Paragraph
      text={`Длительность: ${diary.duration} ${getHours(diary.duration)}`}
      style={{
        minWidth: "200px",
        maxWidth: "250px",
      }}
    />
  );
};
