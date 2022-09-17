import React, { useState } from "react";
import { useEffect } from "react";
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
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const updateTransactions = (payload) => {
        setTransactions([...transactions, payload]);
    }


    useEffect(() => {
        let expense = 0;
        let income = 0;
        transactions.map(
            (transaction) => {
                transaction.type === 'EXPENSE'
                    ? expense += transaction.amount
                    : income += transaction.amount
            }
        );
        setExpense(expense);
        setIncome(income);
    }, [transactions]);

    return (
        <Container>
            <OverviewComponent updateTransactions={updateTransactions} expense={expense} income={income}/>
            <TransactionComponent transactions={transactions} />
        </Container>
    );
}


export default HomeComponent;