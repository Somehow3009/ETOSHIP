import userData from './user-data.json';

export const loginApi = async ({ email, password }) => {

  // Dữ liệu giả lập (thay thế bằng API thực tế nếu có)
  const users = userData.users;
  const user = users.find( u => u.email === email && u.password === password);

  if (user) return { success: true, data: user };
  else return { success: false, message: 'Invalid credentials' };

};