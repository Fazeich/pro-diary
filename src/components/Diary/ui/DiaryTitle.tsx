import React, { FC } from "react";
import { changeDiary } from "stores/diary/diary";
import { IDiary } from "stores/diary/types";
import { Input, Paragraph } from "uikit/components";
import { CheckIcon } from "uikit/icons";

interface IProps {
  isChangingTitle: boolean;
  setIsChangingTitle: React.Dispatch<React.SetStateAction<boolean>>;
  diary: IDiary;
}

export const DiaryTitle: FC<IProps> = ({
  isChangingTitle,
  setIsChangingTitle,
  diary,
}) => {
  if (isChangingTitle) {
    return (
      <Input
        value={diary.title}
        onChange={({ target: { value } }) =>
          changeDiary({ ...diary, title: value })
        }
        onPressEnter={() => setIsChangingTitle(false)}
        suffix={
          <CheckIcon
            cursor="pointer"
            onClick={() => setIsChangingTitle(false)}
          />
        }
        width={"80%"}
      />
    );
  }
  return (
    <Paragraph
      text={diary.title}
      style={{
        wordBreak: "break-all",
      }}
    />
  );
};
