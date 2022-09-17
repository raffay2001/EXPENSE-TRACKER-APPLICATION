import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-family: 'Montserrat';
    width: 100%;
    gap: 10px;
`;

const BalanceBox = styled.div`
    font-size: 18px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const AddTransaction = styled.div`
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
`;

const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8e5;
    gap: 15px;
    padding: 20px 20px;
    margin: 10px 20px;
    width: 100%;
    margin: 20px;
    border-radius: 8px; 
    & input {
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
    & input:focus {
        border: 1px solid black;
    }
`;

const RadioBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    & input{
        width: unset;
        margin: 0 10px;
    }
`

const AddTransactionView = () => {

    const [amount, setAmount] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('EXPENSE');
    const amountRef = useRef();

    useEffect(() => {
        amountRef.current.focus();
    });

    return (
        <AddTransactionContainer>
            <input
                type="text"
                placeholder='Amount'
                value={amount} onChange={(e) => setAmount(e.target.value)}
                ref={amountRef}
            />
            <input
                type="text"
                placeholder='Description'
                value={desc} onChange={(e) => setDesc(e.target.value)}
            />
            <RadioBox>
                <input
                    type="radio"
                    id='expense'
                    name='type'
                    value='EXPENSE'
                    checked={type === 'EXPENSE'}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="expense">
                    Expense
                </label>
                <input
                    type="radio"
                    id='income'
                    name='type'
                    value='INCOME'
                    checked={type === 'INCOME'}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="income">
                    Income
                </label>
            </RadioBox>
            <AddTransaction>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    );
}

const OverviewComponent = ({ }) => {

    const [isAddTxnVisible, toggleAddTxn] = useState(true);

    return (
        <Container>
            <BalanceBox>
                Balance: $10000
                <AddTransaction onClick={() => toggleAddTxn(prevState => !prevState)}>{isAddTxnVisible ? 'Cancel' : 'ADD'}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView />}
        </Container>
    );
}

export default OverviewComponent;