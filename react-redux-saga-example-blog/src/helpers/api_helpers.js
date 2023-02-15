import axios from 'axios'

const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

console.log(process.env.REACT_APP_APP_URL);

const axiosApi = axios.create({
    baseURL: REACT_APP_APP_URL,
  });

