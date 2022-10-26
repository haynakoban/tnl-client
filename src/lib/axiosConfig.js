import axios from 'axios';

export const SERVER_URL =
  'https://trannlearn-server.herokuapp.com/' || process.env.SERVER_URL;

export default axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
