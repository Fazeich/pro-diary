import React from "react";
import { $sidebar, changeSidebarStore } from "stores/sidebar/sidebar";
import { useUnit } from "effector-react";
import { StyledDrawer } from "./styles";
import { $main } from "stores/main/main";

export const Sidebar = () => {
  const { isOpen, size } = useUnit($sidebar);
  const { isMobile } = useUnit($main);

  return (
    <StyledDrawer
      open={isOpen}
      size={size}
      placement="top"
      onClose={() => changeSidebarStore({ isOpen: false })}
      height={isMobile ? "100%" : 250}
      isMobile={isMobile}
      title="ProDiary"
      closable={isMobile}
    >
      Sidebar
    </StyledDrawer>
  );
};
