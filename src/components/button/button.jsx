import React from "react";
import { ButtonStyled } from "./button.style.js";

const Button = ({
  width,
  height,
  bgColor,
  color,
  title,
  onClick,
  bgColorHover,
  colorHover,
  borderRadius,
  style,
}) => {
  return (
    <ButtonStyled
      style={style}
      onClick={onClick}
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      bgColorHover={bgColorHover}
      colorHover={colorHover}
      borderRadius={borderRadius}
    >
      {title}
    </ButtonStyled>
  );
};

export default Button;
