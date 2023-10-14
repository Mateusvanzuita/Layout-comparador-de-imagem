import { Button } from "../Button/Button";
import { HeaderStyle, LinkHeader } from "./headerStyle";
import { FiLogIn } from "react-icons/fi";
import LanguageSelector from "../Languege/Langyage";

interface HeaderProps {
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <div>
      <HeaderStyle>
        <div style={{ display: "flex", alignItems: 'center' }}>
          <div  style={{
            padding: '20px'
              
            }}>
            LOGO
          </div>
          <div style={{ borderRight: '1px solid black', height: '40px' }}></div>
        <LinkHeader>Convert image</LinkHeader>
          <LinkHeader>Editor de Fotos</LinkHeader>
          <LinkHeader>Compactar Imagem</LinkHeader>
        </div>
        <div style={{ display: "flex", marginRight: '10px' }}>
        <LanguageSelector />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiLogIn />
            <p
              style={{
                fontSize: "1.3em",
                fontWeight: 550,
                cursor: "pointer",
                marginLeft: "4px",
              }}
            >
              Inicar sessão
            </p>
          </div>
          <Button
            style={{
              backgroundColor: "#00BE4D",
              padding: "25px",
              width: "200px",
              borderRadius: "5px",
              fontSize: "1.5em",
              marginLeft: "20px",
            }}
            text="Cadastrar-se"
          />
        </div>
      </HeaderStyle>
    </div>
  );
}
