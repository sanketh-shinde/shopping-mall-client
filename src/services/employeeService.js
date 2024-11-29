import axios from "axios";

const baseUrl = "http://192.168.2.78:8081/employees";

export const register = (employee) =>
  axios.post(`${baseUrl}/register`, employee);
