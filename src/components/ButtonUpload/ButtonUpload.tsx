import { ReactNode, CSSProperties } from "react";
import { ButtonLoadStyle } from "./buttonUploadStyle";

interface ButtonLoadProps {
  text: string;
  textAlternativo?: string;
  icon?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

export function ButtonStyle(props: ButtonLoadProps) {
  const handleNonClickableClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div  onClick={handleNonClickableClick} style={{ height: "200px", width: "200px"  }}>{props.icon}</div>
      <p  onClick={handleNonClickableClick} style={{ fontSize: "1.3rem", fontWeight: 550 }}>
        Arraste e solte ou clique para fazer upload de uma imagem
      </p>
      <ButtonLoadStyle onClick={props.onClick} style={props.style}>
        {props.text}
      </ButtonLoadStyle>
    </div>
  );
}
