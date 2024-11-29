import { useState } from "react";

import styles from "../../styles/Employee.module.css";

const RegisterForm = () => {
  const initialState = {
    name: "",
    phoneNumber: "",
    password: "",
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
          roles: [
            { designation: "Admin", role: "ROLE_ADMIN" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "accountant":
        setEmployee({
          ...employee,
          roles: [
            { designation: "Accountant", role: "ROLE_ACCOUNTANT" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "sales-supervisor":
        setEmployee({
          ...employee,
          roles: [
            { designation: "Sales Supervisor", role: "ROLE_SALES_SUPERVISOR" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "floor-supervisor":
        setEmployee({
          ...employee,
          roles: [
            { designation: "Floor Supervisor", role: "ROLE_FLOOR_SUPERVISOR" },
            { designation: "Employee", role: "ROLE_EMPLOYEE" },
          ],
        });
        break;
      case "employee":
        setEmployee({
          ...employee,
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Register Employee</h1>
        <div>
          <label className={styles.labelText}>
            Name:
            <input
              className={styles.input}
              type="text"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              placeholder="Enter Name"
              required
            />
          </label>
        </div>
        <div>
          <label className={styles.labelText}>
            Phone Number:
            <input
              className={styles.input}
              type="number"
              value={employee.phoneNumber}
              onChange={(e) =>
                setEmployee({ ...employee, phoneNumber: e.target.value })
              }
              placeholder="Enter Phone Number"
              required
            />
          </label>
        </div>
        <div>
          <label className={styles.labelText}>
            Joining Date:
            <input
              className={styles.input}
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
          <label className={styles.labelText}>
            Designation:
            <select
              className={styles.input}
              onChange={(e) => handleRoleAndSalary(e.target.value)}
            >
              <option>Select A Designation</option>
              <option value="admin">Admin</option>
              <option value="accountant">Accountant</option>
              <option value="sales-supervisor">Sales Supervisor</option>
              <option value="floor-supervisor">Floor Supervisor</option>
              <option value="employee">Employee</option>
            </select>
          </label>
        </div>
        <div>
          <label className={styles.labelText}>
            Password:
            <input
              className={styles.input}
              type="password"
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
              placeholder="Enter Password"
              required
            />
          </label>
        </div>
        <input
          type="submit"
          value="Register Employee"
          className={styles.submit}
        />
      </form>
    </>
  );
};

export default RegisterForm;
