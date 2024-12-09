import axios from "axios";

const baseUrl = "http://10.0.0.79:8081/auth";

export const login = (employee) => axios.post(`${baseUrl}/login`, employee);

export const user = () => JSON.parse(localStorage.getItem("employee"));
