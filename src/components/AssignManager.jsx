import { useState } from "react";

const AssignManager = () => {
  const [managerId, setManagerId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(managerId);
    console.log(typeof managerId);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Assign Manager</h1>
        <div>
          <label>
            Manager:
            <input
              type="text"
              placeholder="Enter Manager Id"
              value={managerId}
              onChange={(e) => {
                setManagerId(e.target.value);
              }}
              required
            />
          </label>
        </div>
        <input type="submit" value="Assign" />
      </form>
    </>
  );
};

export default AssignManager;
