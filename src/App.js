import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

// making up a parent container and other core components for our application 
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 10px;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold; 
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
