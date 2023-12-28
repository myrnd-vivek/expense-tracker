import "./expense-date.css"
const ExpenseDate = ({date}) => {

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US",{month: "long"});
  const currDate = date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{currDate}</div>
    </div>
  )
}

export default ExpenseDate