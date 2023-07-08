import axios from "../axios";

const handleLoginApi = (userName, userPassword) => {
  return axios.post("/api/v1/Authentication", { username: userName, password: userPassword });
};

const getAccountProfile = (setToken) => {
  return axios.get("/api/v1/Authentication/profile", { headers: { "Authorization": `Bearer ${setToken}` } })
}



// const editAccountService = (accountId, inputData) => {
//   return axios.post("/api/v1/Authentication", { username: userName, password: userPassword });
// };

export { handleLoginApi, getAccountProfile };
