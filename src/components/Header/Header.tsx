import React from "react";
import { StyledHeader } from "./styles";
import { MenuClose, MenuOpen } from "uikit/icons";
import { $sidebar, changeSidebarStore } from "stores/sidebar/sidebar";
import { Input } from "uikit/components";
import { useUnit } from "effector-react";

export const Header = () => {
  const { isOpen } = useUnit($sidebar);
  return (
    <StyledHeader>
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

      <Input />
    </StyledHeader>
  );
};
