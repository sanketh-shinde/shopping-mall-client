import { useState } from "react";
import { useParams } from "react-router-dom";

import Manager from "./Manager";
import {
  findManagerById,
  findManagerByName,
} from "../../services/managerService";

import styles from "../../styles/Employee.module.css";

const AssignManager = () => {
  const param = useParams();

  const employee = {
    id: param.id,
  };

  const initialState = {
    manager: {
      employees: [
        {
          id: employee.id,
        },
      ],
    },
    managerId: "",
  };

  const [data, setData] = useState(initialState);

  const [managerList, setManagerList] = useState([]);

  const handleSearch = (value) => {
    const id = Number(value);
    if (!isNaN(id)) {
      findManagerById(value)
        .then((response) => {
          setManagerList(response.data.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    } else if (typeof value == "string") {
      findManagerByName(value)
        .then((response) => {
          setManagerList(response.data.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  };

  return (
    <>
      <div className={styles.form}>
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
                handleSearch(e.target.value);
              }}
              required
            />
          </label>
        </div>
        {managerList.length > 0 && (
          <Manager assign={{ managers: managerList, data: data }} />
        )}
      </div>
    </>
  );
};

export default AssignManager;
