import axios from 'axios';

export const fetchUser = username => (
  axios.get(`api/users/${username}`)
);
