import styled from 'styled-components';

export const HeaderContainer = styled.section`
background-color:#060608;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 10vh;

a{
  color: #E7DFDD;
  font-size: 1.5rem;
  font-weight: 500;
}

a:hover{
  color: #23BE53 ;
}
`;

export const ButtonContact = styled.button`
background-color: #23BE53;
width: 100px;
font-size: 1rem;
border: none;
border-radius: 10px;
font-weight: 600;
height: 30px;
cursor: pointer;
color: #E7DFDD ;

:hover{
  background-color: #E7DFDD;
  color: #060608;
}

`;