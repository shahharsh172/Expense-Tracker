import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expense/Expenses";
import { useState } from "react";

//import logo from './logo.svg';
//import "./App.css";
// const App =() =>{} shorthand for declaring functions
const DUMMY_EXPENSES = [
  { id: 21, title: "Car insurance", amount: 505, date: new Date(2021, 8, 15) },
  { id: 2, title: "Paper Work", amount: 5045, date: new Date(2021, 9, 26) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
    // console.log("In App.js");
    // console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
