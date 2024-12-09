import axios from "axios";

import managerAxiosInstance from "../interceptors/managerInterceptor";

const baseUrl = "http://10.0.0.79:8081/managers";

export const assignManager = (managerId, employeeId) =>
  managerAxiosInstance.put(`${baseUrl}/assignManager/${managerId}`, employeeId);

export const findManagerById = (id) => axios.get(`${baseUrl}?id=${id}`, id);

export const findManagerByName = (name) =>
  axios.get(`${baseUrl}?name=${name}`, name);
