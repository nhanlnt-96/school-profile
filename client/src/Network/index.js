import axios from 'axios';

const baseURL = 'http://localhost:3001/';

//create-user
export const createUser = async (date, fullname, gender, username, password) => {
    return axios.post(`${baseURL}create-user`, {
        date: date,
        fullname: fullname,
        gender: gender,
        username: username,
        password: password
    })
}
