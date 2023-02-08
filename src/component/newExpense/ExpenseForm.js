import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] =  useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // This Obj expData is created to store the info added in input so tht we can use it to store in exp. tracker
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData);
        // Doing this to empty the input section after submition 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler} 
                        value={enteredTitle} // Sets initail value ex: placeholder enteredTitle is set to emptyString 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number"
                        onChange={amountChangeHandler}  
                        value={enteredAmount} 
                        min='0.01' step='0.01'
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date"  
                        onChange={dateChangeHandler}  
                        value={enteredDate} 
                        min='2019-1-1' max='2020-12-31'
                    />
                </div>
            </div>

            <div className="new-expense__action">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>  Add Expense </button>
            </div>

        </form>
    );
};

export default ExpenseForm;