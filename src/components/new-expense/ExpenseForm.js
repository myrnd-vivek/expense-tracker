import React, { useState } from "react";
import "./expense-form.css";

const ExpenseForm = ({ saveExpenseDataHandler,setIsOpen }) => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [date, setDate] = useState("");

	const titleChangeHandler = (e) => {
		setTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		saveExpenseDataHandler({
			id: Math.random().toString(),
			expenseTitle:title,
			expenseAmount:amount,
			expenseDate: new Date(date),
		});
		setTitle("");
		setAmount("");
		setDate("");
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Expense Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={title}
					/>
				</div>
				<div className="new-expense__control">
					<label>Expense Amount</label>
					<input
						type="text"
						onChange={amountChangeHandler}
						value={amount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Expense Date</label>
					<input
						type="date"
						onChange={dateChangeHandler}
						value={date}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={() => setIsOpen(false)}>Cancel</button>
				<button onClick={submitHandler}>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
