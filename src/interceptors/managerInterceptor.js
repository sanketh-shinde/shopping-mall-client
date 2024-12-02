import axios from "axios";

const employeeAxiosInstance = axios.create({
  baseURL: "http://localhost:8081/managers",
});

employeeAxiosInstance.interceptors.request.use(
  (config) => {
    const employee = JSON.parse(localStorage.getItem("employee"));

    if (employee.token) {
      config.headers["Authorization"] = `Bearer ${employee.token}`;
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

employeeAxiosInstance.interceptors.response.use(
  (response) => {
    if (response.status == 302) {
      console.log(response.data);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized: Please log in again.");
      } else if (error.response.status === 404) {
        console.error("Not Found: The requested resource was not found.");
      } else {
        console.error("An error occurred: ", error.response.data);
      }
    } else {
      console.error("Network Error: ", error.message);
    }
    return Promise.reject(error);
  }
);

export default employeeAxiosInstance;
