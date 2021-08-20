import axios from 'axios';
/**
 * Base axios instance is provided from here
 * @returns instance of base
 */
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
