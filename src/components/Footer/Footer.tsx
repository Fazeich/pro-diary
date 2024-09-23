import React from "react";
import { StyledFooter } from "./styles";
import { useUnit } from "effector-react";
import { Input, Paragraph, Select } from "uikit/components";
import { SendIcon } from "uikit/icons";
import {
  $diary,
  addDiary,
  changeNewDiary,
  resetNewDiary,
} from "stores/diary/diary";
import { uniqueId } from "lodash";
import { DurationSelect } from "features";
import { $efficiency, $main } from "stores/main/main";
import { IMPORTANCE_OPTIONS } from "lib/constants/constants";
import { PlusIcon } from "uikit/icons/PlusIcon";

export const Footer = () => {
  const { newDiary } = useUnit($diary);
  const { timeLost } = useUnit($efficiency);
  const { isMobile } = useUnit($main);

  const isDisabledAdding = Number(newDiary?.duration || 0) > timeLost;

  const handleAddDiary = () => {
    if (!!newDiary?.title && !isDisabledAdding) {
      addDiary({ ...newDiary, id: Number(uniqueId()) });

      resetNewDiary();
    }
  };

  if (isMobile) {
    return (
      <StyledFooter isMobile={isMobile}>
        <PlusIcon size={45} theme="accent" />
      </StyledFooter>
    );
  }

  return (
    <StyledFooter isMobile={isMobile}>
      <Paragraph
        text={`Оставшееся время: ${timeLost}`}
        theme="accent"
        style={{
          minWidth: "200px",
        }}
      />

      <Input
        placeholder="Что необходимо сделать?"
        value={newDiary?.title || ""}
        onChange={({ target: { value } }) => changeNewDiary({ title: value })}
        onPressEnter={handleAddDiary}
        width={"70%"}
      />

      <Select
        value={newDiary?.importance}
        options={IMPORTANCE_OPTIONS}
        placement="topLeft"
        width={250}
        placeholder="Важность"
        onChange={(value) => changeNewDiary({ importance: value })}
      />

      <DurationSelect
        placeholder="Длительность"
        placement="topLeft"
        duration={newDiary?.duration}
        setDuration={(value) => changeNewDiary({ duration: value })}
        width={250}
        getDisabledOption={(option) => Number(option.value) > timeLost}
      />

      <SendIcon
        cursor="pointer"
        disabled={!newDiary?.title || isDisabledAdding}
        onClick={handleAddDiary}
      />
    </StyledFooter>
  );
};
