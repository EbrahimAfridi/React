import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    // Just a side function
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;