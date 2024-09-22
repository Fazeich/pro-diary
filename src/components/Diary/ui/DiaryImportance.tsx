import { IMPORTANCE_OPTIONS } from "lib/constants/constants";
import React, { FC, useMemo } from "react";
import { changeDiary } from "stores/diary/diary";
import { IDiary } from "stores/diary/types";
import { Paragraph, Select } from "uikit/components";
import { FlexUnwrap } from "../styles";

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
  const importanceLabel = useMemo(() => {
    switch (diary.importance) {
      case "important":
        return "Важно";
      case "not_important":
        return "Не важно";
      default:
        return "Не указано";
    }
  }, [diary.importance]);

  if (isChangingImportance) {
    return (
      <FlexUnwrap>
        <Paragraph
          onClick={() => setIsChangingImportance(true)}
          text="Важность: "
        />
        <Select
          value={diary?.importance || null}
          onChange={(value) => {
            changeDiary({ ...diary, importance: value });

            setIsChangingImportance(false);
          }}
          defaultOpen
          options={IMPORTANCE_OPTIONS}
          width={150}
        />
      </FlexUnwrap>
    );
  }

  return (
    <Paragraph
      text={`Важность: ${importanceLabel}`}
      style={{
        minWidth: "200px",
        maxWidth: "250px",
      }}
    />
  );
};
