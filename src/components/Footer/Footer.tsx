import React from "react";
import { StyledFooter } from "./styles";
import { $sidebar, changeSidebarStore } from "stores/sidebar/sidebar";
import { CloseIcon, MenuClose, MenuOpen } from "uikit/icons";
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
import { $main } from "stores/main/main";
import { IMPORTANCE_OPTIONS } from "lib/constants/constants";

export const Footer = () => {
  const { isOpen } = useUnit($sidebar);
  const { newDiary, diaries } = useUnit($diary);
  const {
    settings: { efficiency },
  } = useUnit($main);

  const timeCost = diaries?.reduce((prev, next) => {
    return prev + Number(next.duration) || 0;
  }, 0);

  const isDisabledAdding =
    timeCost + Number(newDiary?.duration || 0) > efficiency;

  const handleAddDiary = () => {
    if (!!newDiary?.title && !isDisabledAdding) {
      addDiary({ ...newDiary, id: Number(uniqueId()) });

      resetNewDiary();
    }
  };

  return (
    <StyledFooter>
      {isOpen ? (
        <MenuClose
          cursor="pointer"
          onClick={() => changeSidebarStore({ isOpen: false })}
        />
      ) : (
        <MenuOpen
          cursor="pointer"
          onClick={() => changeSidebarStore({ isOpen: true })}
        />
      )}

      <Paragraph
        text={`Оставшееся время: ${efficiency - timeCost}`}
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
        getDisabledOption={(option) => {
          const timeLost = efficiency - timeCost;

          return Number(option.value) > timeLost;
        }}
      />

      <SendIcon
        cursor="pointer"
        disabled={!newDiary?.title || isDisabledAdding}
        onClick={handleAddDiary}
      />
    </StyledFooter>
  );
};
