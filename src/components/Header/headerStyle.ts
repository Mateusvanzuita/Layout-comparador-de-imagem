import styled from 'styled-components';

export const HeaderStyle = styled.header`
margin-bottom: 25px;
padding: 25px;
display: flex;
background-color: #87CEFA;
justify-content: space-between;
align-items: center;
`

export const ButtonHeader = styled.button`
padding: 10px;
width: 130px;
border-radius: 15px;
border: none;
background-color: #4169E1;
color: white;
cursor: pointer;
`

export const LinkHeader = styled.p`
font-size: 1.2em;
margin-left: 20px;
margin-right: 20px;
cursor: pointer;
font-weight: 550;

&:hover {
  text-decoration: underline; 
}
`