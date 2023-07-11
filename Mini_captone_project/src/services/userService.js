import axios from "../axios";

const handleLoginApi = (userName, userPassword) => {
  return axios.post("/api/v1/Authentication", { username: userName, password: userPassword });
};

const getAccountProfile = (setToken) => {
  return axios.get("/api/v1/Authentication/profile", { headers: { "Authorization": `Bearer ${setToken}` } })
}

const registerAccount = (data) => {
  return axios.post("/api/v1/Accounts/customer", data)
}

const editAccount = (data, setToken) => {
  return axios.put("/api/v1/Accounts", data, { headers: { "Authorization": `Bearer ${setToken}` } });
};

const bookingService = (data, setToken) => {
  return axios.post("/api/v1/Bookings", data, { headers: { "Authorization": `Bearer ${setToken}` } });
};

export { handleLoginApi, getAccountProfile, registerAccount, editAccount, bookingService };
