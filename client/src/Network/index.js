import axios from 'axios';

const baseURL = 'http://localhost:3001/';

//create-user
export const createUser = async (adminId, date, fullname, gender, username, password) => {
  return axios.post(`${baseURL}create-user`, {
    adminId: adminId,
    date: date,
    fullname: fullname,
    gender: gender,
    username: username,
    password: password
  })
};

//get-user
export const getUser = async () => {
  return axios.get(`${baseURL}user-login`);
}
