import './App.css';
import React, { useState } from 'react';
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/newExpense/NewExpense";

// Array of Objects ( Data Centre )
const DUMMY_EXPENSES = [ {
    id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
}, {
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
}, {
    id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),
}, {
    id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
},];


const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (new_expense) => {   /* new_expense is just a parameter nothing to do with expenses array*/
        setExpenses( (prevExpense) => {
            return [new_expense, ...prevExpense]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items = {expenses} />
        </div>
    );
}; 

export default App;


