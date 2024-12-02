import { assignManager } from "../../services/managerService";

const Manager = (props) => {
  const managers = props.assign.managers;
  const data = props.assign.data;
  console.log(managers, data);

  const handleSubmit = () => {
    assignManager(data.managerId, data.employeeId);
  };

  return (
    <>
      {managers.map((manager) => {
        return (
          <div key={manager.id}>
            <p>{manager.name}</p>
            <p>{manager.roles[0].designation}</p>
            <input type="submit" value="Assign" onClick={handleSubmit} />
          </div>
        );
      })}
    </>
  );
};

export default Manager;
