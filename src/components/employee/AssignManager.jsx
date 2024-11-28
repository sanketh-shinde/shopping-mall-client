import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../../styles/Employee.module.css";

const AssignManager = () => {
  const initialState = {
    employeeId: 0,
    managerId: "",
  };

  const param = useParams();

  const [data, setData] = useState(initialState);
  useEffect(() => {
    setData({ ...data, employeeId: param.id });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Assign Manager</h1>
        <div>
          <label className={styles.labelText}>
            Manager:
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Manager Id"
              value={data.managerId}
              onChange={(e) => {
                setData({ ...data, managerId: e.target.value });
              }}
              required
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default AssignManager;
