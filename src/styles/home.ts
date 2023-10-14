import styled from "styled-components";

export const ConteudoStyle = styled.div`
  border-radius: 5px;
  background-color: #878787;
  width: 100%;
  height: 50%;
  padding: 12px;
  margin-bottom: 15px;
`;

export const Conteudo = styled.div`
  align-items: center;
  background-color: #cacaca;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  border: 3px dashed white;
  border-radius: 5px;
  padding: 15px;
`;

export const BodyUpload = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 25px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #B0C4DE;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const ButtonUpload = styled.button`
  font-weight: 800;
  border: none;
  background-color: #ff6347;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 0.2s;


  &:hover {
  background-color: #FF0000;
}
`;
