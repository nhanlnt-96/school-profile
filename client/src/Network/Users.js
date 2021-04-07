import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const RegisterUser = async (fullname, gender, username, password) => {
  return axios.post(`${baseURL}/register`, {
    adminId: 1,
    fullname: fullname,
    gender: gender,
    username: username,
    password: password
  })
}