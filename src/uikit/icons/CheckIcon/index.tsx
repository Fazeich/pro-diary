import { CheckOutlined } from "@ant-design/icons";
import { IIconProps } from "lib/types/types";
import React, { FC } from "react";
import { IconWrapper } from "uikit/components";

export const CheckIcon: FC<IIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <CheckOutlined />
    </IconWrapper>
  );
};
