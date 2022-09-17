import React, { useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

// making up a parent container and other core components for our application 
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 10px;
  font-family: 'Montserrat', sans-serif;
  width: 360px;
`;

const HomeComponent = (props) => {
    const [transactions, setTransactions] = useState([]);
    const updateTransactions = (payload) => {
        setTransactions([...transactions, payload]);
    }
    return (
        <Container>
            <OverviewComponent updateTransactions={updateTransactions} />
            <TransactionComponent transactions={transactions}/>
        </Container>
    );
}


export default HomeComponent;