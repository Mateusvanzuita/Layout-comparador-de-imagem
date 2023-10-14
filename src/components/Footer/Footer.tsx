import { FooterStyle, LinksStyle } from "./footerStyle"

export function Footer() {
  return (
    <FooterStyle>
      <p>Desenvolvido em Florianópolis (Brasil)<br />
        Por <span style={{ color: 'blue', fontWeight: 600 }}>Mateus Vanzuita</span>
      </p>
      <div style={{ display: 'flex', marginLeft: '10px' }}>
      <LinksStyle>
        Termos de Uso
      </LinksStyle>
      <LinksStyle>
        Política de Privacidade
      </LinksStyle>
      <LinksStyle>
        Fale Conosco
      </LinksStyle>
    
      </div>
      </FooterStyle>
  
  )
}