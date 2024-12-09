import { useState } from "react";

import { assignManager } from "../../services/managerService";
import styles from "../../styles/Manager.module.css";

const Manager = (props) => {
  const managers = props.assign.managers;
  const data = props.assign.data;

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    assignManager(data.managerId, data.manager)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <>
      {message && <h3 className={styles.message}>{message}</h3>}
      {managers.map((manager) => {
        return (
          <div key={manager.id} className={styles.card}>
            <p className={styles.name}>{manager.name}</p>
            <p className={styles.designation}>{manager.roles[0].designation}</p>
            <input
              type="submit"
              value="Assign"
              onClick={handleSubmit}
              className={styles.assignButton}
            />
          </div>
        );
      })}
    </>
  );
};

export default Manager;
