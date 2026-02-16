import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const API = "http://localhost:8080/api/employees";

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setEmployees(data);
  };

  const addEmployee = async () => {

    if (!firstName || !lastName || !email) {
      alert("Please fill all fields");
      return;
    }

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
    });

    setFirstName("");
    setLastName("");
    setEmail("");

    fetchEmployees();
  };

  const deleteEmployee = async (id) => {

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchEmployees();
  };

  return (
    <div className="container">

      <h1>Employee Management System</h1>

      <div className="form">

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={addEmployee}>
          Add Employee
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>

              <td>
                <button
                  className="delete"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;
