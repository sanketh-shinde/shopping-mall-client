import axios from "axios";

const baseUrl = "http://192.168.2.78:8081/managers";

export const assignManager = (managerId, employeeId) =>
  axios.post(`${baseUrl}/assignManager/${managerId}`, managerId, employeeId);

export const findManagerById = (id) => axios.get(`${baseUrl}?id=${id}`, id);

export const findManagerByName = (name) =>
  axios.get(`${baseUrl}?name=${name}`, name);
