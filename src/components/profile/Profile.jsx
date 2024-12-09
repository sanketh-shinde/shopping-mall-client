import React from "react";
import { user } from "../../services/authService";

const Profile = () => {
  const employee = user();

  return <div>{employee.detailsDTO.name}</div>;
};

export default Profile;
