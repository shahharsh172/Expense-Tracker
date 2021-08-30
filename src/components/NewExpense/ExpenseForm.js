import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Another way of Implementing similar thing through single useState.
  // const [userInput, setUserInput] = useState({
  //     enteredTitle :'',
  //     enteredAmount: '',
  //     enteredDate:''
  // })
  // const titleChangeHandler = (e)=>{
  //     setUserInput((prevState) =>{
  //         return {...prevState,
  //             enteredTitle: e.target.value;
  //         }
  //     })
  // }

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const datehandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //TO stop from reloading page by default, or to prevent browser default behaviour.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // parent-child composition is used, onSaveExpenseData is called from NewExpense component
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={datehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>
          {" "}
          Cancel{" "}
        </button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
