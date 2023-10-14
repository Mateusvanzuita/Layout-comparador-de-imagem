import { CSSProperties } from "react";
import { ButtonStyled } from "./buttonStyle"

interface ButtonProps{
  text: string
  style?: CSSProperties
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <ButtonStyled onClick={props.onClick} style={props.style}>{props.text}</ButtonStyled>
    </div>
  );
}
