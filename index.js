const expenseData = document.querySelector("#expense-form")

function clickHandler(ev) {
  ev.preventDefault()
  
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  if(!amount || !description || !category) {
    return alert('All fields are required !!')
  }

  const data = {
    _id: new Date().getUTCMilliseconds(),
    amount,
    description,
    category,
  }
  console.log(data);
  addToLocalStorage(data);
}

function addToLocalStorage(data) {
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  if(expenses) {
    expenses.push(data);
    localStorage.setItem("expenses",JSON.stringify(expenses))
  } else {
    localStorage.setItem("expenses",JSON.stringify([data]))
  }
  render();
}

function deleteExpense(id) {
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  if(expenses) {
    const newExpense = expenses.filter((item) => {
      return item._id != id;
    });
    console.log(newExpense)
    localStorage.setItem("expenses",JSON.stringify(newExpense))
    render();
  }
}

function editExpense(id) {
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  if(expenses) {
    const item = expenses.find((item) => {
      return item._id == id;
    });
    deleteExpense(id);
    console.log(item)
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    const category = document.getElementById("category");

    amount.value = item.amount;
    description.value = item.description;
    category.value = item.category;

  }
}

function render() {
  const expenses = JSON.parse(localStorage.getItem('expenses'));
  const tbody = document.getElementById("items");
  if (expenses) {
    items.innerHTML = '';
    expenses.forEach((el,index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <th scope="row">${el.amount}</th>
        <td>${el.description}</td>
        <td>${el.category}</td>
        <td> 
          <button onclick="editExpense('${el._id}')"><i class="bi bi-pencil-square edit"></i></button>
          <button onclick="deleteExpense('${el._id}')"><i class="bi bi-trash3 delete"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
}

render();