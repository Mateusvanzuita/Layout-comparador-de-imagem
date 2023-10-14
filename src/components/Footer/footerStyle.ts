import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
  margin-top: 25px;
  background-color: #e4f2e7;
  color: #696969; /* Cor do texto no footer */
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LinksStyle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: #696969;

  &:hover {
    color: #a9a9a9;
  }
`;
