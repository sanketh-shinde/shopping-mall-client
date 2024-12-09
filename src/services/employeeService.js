import employeeAxiosInstance from "../interceptors/employeeInterceptor";

const baseUrl = "http://10.0.0.79:8081/employees";

export const register = (employee) =>
  employeeAxiosInstance.post(`${baseUrl}/register`, employee);

export const findEmployee = (employeeId) =>
  employeeAxiosInstance.get(`${baseUrl}/${employeeId}`);
