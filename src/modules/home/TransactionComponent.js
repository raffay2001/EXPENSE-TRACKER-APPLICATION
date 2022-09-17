import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }
    & input:focus {
        border: 1px solid black;
    }
`;

const TransactionCell = ({ transaction }) => {
    return (
        <></>
    );
}

const TransactionComponent = ({ transactions }) => {
    return (
        <Container>
            Transactions
            <input
                type="text"
                placeholder='Search'
            />
            {
                transactions.length ? transactions.map((transaction) => <TransactionCell transaction={transaction} />) : ''
            }

        </Container>
    );
}

export default TransactionComponent;