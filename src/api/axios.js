import axios from 'axios';
import { baseURL } from './config.js';

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
