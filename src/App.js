import React, { useState } from 'react'
import ExpenseItems from './components/expenses/ExpenseItems'
import "./App.css";
import Card from './components/ui/Card';
import NewExpense from './components/new-expense/NewExpense';
import ExpenseFilter from './components/expenses/ExpenseFilter';
import ExpenseChart from './components/expenses/ExpenseChart';

const INTIAL_EXPENSE = [
  {
    id: Math.random().toString(),
    expenseDate: new Date(),
    expenseTitle: 'Car Insurance',
    expenseAmount: '294.67',
  },
  {
    id: Math.random().toString(),
    expenseDate: new Date(),
    expenseTitle: 'Bike Insurance',
    expenseAmount: '799',
  },
  {
    id: Math.random().toString(),
    expenseDate: new Date("2022-12-10"),
    expenseTitle: 'New TV',
    expenseAmount: '699',
  },
]

const App = () => {
  const [expense,setExpense] = useState(INTIAL_EXPENSE);
  const [filteredExpense,setFilteredExpense] = useState(INTIAL_EXPENSE);
  const [filteredYear, setFilteredYear] = useState('2023');
  const [IsOpen, setIsOpen] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense,...prevState]
    })
  }


  const filterChangeHandler = (ev) => {
    const selectedYear = ev.target.value
		setFilteredYear(selectedYear);
    const newExp = expense.filter((item) => {
      return item.expenseDate.getFullYear() ===  +selectedYear;
    })
    setFilteredExpense(newExp);
	}

  return (
    <Card className='expenses'>
      <NewExpense addExpenseHandler={addExpenseHandler} IsOpen={IsOpen} setIsOpen={setIsOpen}/>
			<ExpenseFilter selected={filteredYear} dropDownChangeHandler={filterChangeHandler}/>
      <ExpenseChart expenses={filteredExpense} />
      {
        filteredExpense.map((item,index) => {
          return <ExpenseItems date={item.expenseDate} title={item.expenseTitle} amount={item.expenseAmount} key={index} />
        })
      } 
      {filteredExpense.length === 1 && <h2 style={{color:"white"}}>Only single Expense here. Please add more...</h2>}
      {filteredExpense.length === 0 && <h2 style={{color:"white"}}>No expense found...</h2>}
    </Card>
  )
}

export default App