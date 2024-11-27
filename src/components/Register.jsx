import { useState } from "react";

const RegisterForm = () => {
  const initialState = {
    name: "",
    phoneNumber: "",
    password: "",
    salary: 0.0,
    joiningDate: "",
    year: new Date().getFullYear(),
    roles: [
      {
        designation: "Employee",
        role: "ROLE_EMPLOYEE",
      },
    ],
  };

  const [employee, setEmployee] = useState(initialState);

  const handleRoleAndSalary = (designation) => {
    switch (designation) {
      case "admin":
        setEmployee({
          ...employee,
          salary: 65000,
          roles: [
            { designation: "Admin", role: "ROLE_ADMIN" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "accountant":
        setEmployee({
          ...employee,
          salary: 55000,
          roles: [
            { designation: "Accountant", role: "ROLE_ACCOUNTANT" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "sales-supervisor":
        setEmployee({
          ...employee,
          salary: 45000,
          roles: [
            { designation: "Sales Supervisor", role: "ROLE_SALES_SUPERVISOR" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "floor-supervisor":
        setEmployee({
          ...employee,
          salary: 35000,
          roles: [
            { designation: "Floor Supervisor", role: "ROLE_FLOOR_SUPERVISOR" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "employee":
        setEmployee({
          ...employee,
          salary: 25000,
          roles: [{ designation: "Employee", role: "ROLE_EMPLOYEE" }],
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register Employee</h1>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="number"
              value={employee.phoneNumber}
              onChange={(e) =>
                setEmployee({ ...employee, phoneNumber: e.target.value })
              }
              required
            />
          </label>
        </div>
        <div>
          <label>
            Joining Date:
            <input
              type="date"
              value={employee.joiningDate}
              onChange={(e) =>
                setEmployee({ ...employee, joiningDate: e.target.value })
              }
              required
            />
          </label>
        </div>
        <div>
          <label>
            Designation:
            <select onChange={(e) => handleRoleAndSalary(e.target.value)}>
              <option>Select a designation</option>
              <option value="admin">Admin</option>
              <option value="accountant">Accountant</option>
              <option value="sales-supervisor">Sale Supervisor</option>
              <option value="floor-supervisor">Floor Supervisor</option>
              <option value="employee">Employee</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
              required
            />
          </label>
        </div>
        <input type="submit" value="Register Employee" />
      </form>
    </>
  );
};

export default RegisterForm;
