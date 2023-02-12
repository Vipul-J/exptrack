import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [remainingMoney, setRemainingMoney] = useState("");

  const addExpense = (event) => {
    event.preventDefault();
    setExpenses([...expenses, { description, amount }]);
    setDescription("");
    setAmount(0);
    setRemainingMoney(remainingMoney - amount);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount,0);

  return (
    <div className="container shadow p-4 mb-5 bg-body rounded mt-5">

      <h3 className="fw-bold text-decoration-underline mb-3 text-center">Expense Tracker</h3>
      <h5>
        Total Expense:{" "}
        <span className="text-danger">{totalExpenses} INR</span>
      </h5>

      <h5>
        Total Money Remaining:{" "}
        <input
          type="number"
          value={remainingMoney}
          onChange={(event) => setRemainingMoney(event.target.value)}
        />{" "}
        INR
      </h5>

      <form className="mt-5" onSubmit={addExpense}>
        <div className="form-group mb-2">
          <label>Expense Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label>Amount (INR)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-outline-info text-dark">
          Add Expense
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount (INR)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      

      
    </div>
  );
};

export default App;
