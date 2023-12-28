import React from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./expense-items.css";

const ExpenseItems = (props) => {

	const expenseDate = props.date;
	const expenseTitle = props.title;
	const amount = props.amount;

	return (
		<Card className="expense-item">
	    <ExpenseDate date={expenseDate}/>
	    <ExpenseDetails amount={amount} title={expenseTitle}/>
		</Card>
	);
};

export default ExpenseItems;
