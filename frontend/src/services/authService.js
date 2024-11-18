// xử lý api cho xác thực
import { loginApi } from './api';

export const login = (credentials) => {
    
    //const response = await api.post('/auth/login', credentials);
    return loginApi(credentials);
};

export const register = async (userData) => {
    // try {
    //     const response = await api.post('/auth/register', userData);
    //     return response.data;
    // } catch (error) {
    //     console.error("Register failed:", error);
    //     throw error;
    // }
};