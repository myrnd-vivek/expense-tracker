import React from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpenseHandler, IsOpen, setIsOpen }) => {
	const saveExpenseDataHandler = (data) => {
		addExpenseHandler(data);
    setIsOpen(false)
	};
	return (
		<div className="new-expense">
			{IsOpen ? (
				<ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} setIsOpen={setIsOpen}/>
			) : (
				<button onClick={() => setIsOpen(true)}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
