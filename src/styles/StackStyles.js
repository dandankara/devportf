import styled from 'styled-components';

export const ContainerFlex = styled.section`
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
 background-color: #060608;
 height: 100vh;
 color: #E7DFDD;
`;

export const ItemFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: 2rem;
align-items: center;
border-radius: 10px;
width: 200px;
height: 200px;
margin: 4rem;
background-color: #333333;

p{
  color: #E7DFDD;
}
hr{
  width: 100%;
}
`;

export const Back = styled.button`
`;

