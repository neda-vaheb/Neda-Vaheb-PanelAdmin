import axios from "axios";

const register = ({username, password}) => {
  return axios.post("http://localhost:3000/auth/register", {
    username,
    password,
  });
};
const login = ({username, password}) => {
  return api.post("http://localhost:3000/auth/login", {
    username,
    password,
  });
};
export { register, login };
