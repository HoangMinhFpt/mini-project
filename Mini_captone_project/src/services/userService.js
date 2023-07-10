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



// const editAccountService = (accountId, inputData) => {
//   return axios.post("/api/v1/Authentication", { username: userName, password: userPassword });
// };

export { handleLoginApi, getAccountProfile, registerAccount };
