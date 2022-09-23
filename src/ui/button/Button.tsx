/* External dependencies */
import * as Chakra from "@chakra-ui/react";
import React from "react";

/* Local dependencies */

type ButtonTypeColor = "white" | "primary" | "transparent" | "success";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  shadow?: string;
  textColor?: string;
  width?: any;
}

interface CustomButtonProps extends ButtonProps {
  typeColor?: ButtonTypeColor;
}

export default function Button(props: CustomButtonProps) {
  const {
    children,
    className,
    disabled,
    loading,
    onClick,
    width,
    shadow,
    textColor,
    typeColor,
  } = props;
  return (
    <Chakra.Button
      disabled={disabled}
      className={className}
      width={width}
      colorScheme={typeColor}
      onClick={onClick}
      isLoading={loading}
      textColor={textColor}
      fontWeight={600}
      shadow={shadow}
    >
      {children}
    </Chakra.Button>
  );
}
