import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ConteudoStyle, BodyLayout } from "./ConteudoStyle"

interface PropsLayout {
  children: any
}

export function Layout(props: PropsLayout) {
  return (
    <BodyLayout>
      <Header text="Teste"/>
      <ConteudoStyle>
      {props.children}
      </ConteudoStyle>
      <Footer />
    </BodyLayout>
  )
}