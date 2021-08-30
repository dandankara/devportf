import styled from 'styled-components'

export const ContainerProjects = styled.div`
  background-color: #060608;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

export const CardProjects = styled.div`
  padding: 10px;
  margin: 1rem;
  display: flex;
  width: 200px;
  height: 300px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  border-radius: 1rem;
  background-color: #333333;
  color: #E7DFDD;
  

  a{
    width: 100%;
    text-align: center;
    background-color: #23BE53;
    padding: 10px;
    border-radius: 10px;
  }
`;