import { CloseOutlined } from "@ant-design/icons";
import { IIconProps } from "lib/types/types";
import React, { FC } from "react";
import { IconWrapper } from "uikit/components";

export const CloseIcon: FC<IIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <CloseOutlined />
    </IconWrapper>
  );
};
