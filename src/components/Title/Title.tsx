import { TitleStyle, SubtileStyle } from "./titleStyle";

interface TitleProps {
  text: string;
  subtitle?: string;
}

export function Title(props: TitleProps) {
  return (
    <div > 
      <TitleStyle>{props.text}</TitleStyle>
      <SubtileStyle>{props.subtitle}</SubtileStyle>
    </div>
  );
}
