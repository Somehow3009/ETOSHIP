//cấu hình axios hoặc fetch cho các yêu cầu http
//import axios from 'axios';
import userData from './user-data.json';

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
// });

export const loginApi = async ({ email, password }) => {

  // Dữ liệu giả lập (thay thế bằng API thực tế nếu có)
  const users = userData.users;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) return { success: true, data: user };
  else return { success: false, message: 'Invalid credentials' };

};
