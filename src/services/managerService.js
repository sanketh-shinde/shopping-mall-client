import axios from "axios";

const baseUrl = "http://192.168.2.78:8081/managers";

export const assignManager = axios.post(
  `${baseUrl}/assignManager/${id}`,
  managerId
);

export const findManager = axios.post(`${baseUrl}?`, managerId);
