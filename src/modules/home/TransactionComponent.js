import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-family: 'Montserrat';
    font-size: 18px;
    width: 100%;
    font-weight: bold;
    & input {
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid lightgray;
        width: 100%;
    }
    & input:focus {
        border: 1px solid black;
    }
`;

const Cell = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
    align-items: center;
    font-weight: normal;
    width: 100%;
    justify-content: space-between; 
    border: 1px solid lightgray;
    border-right: 4px solid ${(props) => (props.isExpense ? 'red' : 'green')};
`;

const TransactionCell = ({ transaction }) => {
    return (
        <Cell isExpense={transaction.type === 'EXPENSE'}>
            <span>{transaction.desc}</span>
            <span>${transaction.amount}</span>
        </Cell>
    );
}

const TransactionComponent = ({ transactions }) => {

    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    const [searchText, setSearchText] = useState('');

    const filterData = (searchText) => {
        if (!searchText || !searchText.trim().length) {
            setFilteredTransactions(transactions);
            return;
        }
        let txn = [...transactions];
        txn = txn.filter(
            (payload) => (payload.desc.toLowerCase().includes(searchText.toLowerCase()))
        );
        setFilteredTransactions(txn);
    }

    useEffect(() => {
        filterData(searchText);
    }, [transactions]);

    return (
        <Container>
            Transactions
            <input
                type="text"
                placeholder='Search'
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value); filterData(e.target.value)}}
            />
            {
                filteredTransactions.length ? filteredTransactions.map((transaction) => <TransactionCell transaction={transaction} key={transaction.id} />) : ''
            }

        </Container>
    );
}

export default TransactionComponent;