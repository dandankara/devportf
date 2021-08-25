import styled from 'styled-components'

export const ContainerProjects = styled.div`
  background-color: #060608;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardProjects = styled.div`
  background-color: red;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  border-radius: 1rem;
  justify-content: space-between;
  color: #E7DFDD;
  background-color: #333333;

  a{
    width: 100%;
    text-align: center;
    background-color: #23BE53;
    padding: 10px;
    
  }
`;