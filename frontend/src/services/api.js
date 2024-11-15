//cấu hình axios hoặc fetch cho các yêu cầu http
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default api;