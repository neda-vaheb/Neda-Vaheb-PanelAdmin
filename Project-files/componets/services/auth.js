import axios from "axios";
import api from "../config/api"
const register = (data) => {
  return axios.post("http://localhost:3000/auth/register", {
    username:`${data.username}`,
    password:`${data.password}`,
  });
};
const login = ({username, password}) => {
  return api.post("http://localhost:3000/auth/login", {
    username,
    password,
  });
};
export { register, login };
