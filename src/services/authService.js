import axios from "axios";

const baseUrl = "http://192.168.2.78:8081/auth";

export const login = (employee) => axios.post(`${baseUrl}/login`, employee);
