// xử lý api cho xác thực
import api from './api';
import userData from './user-data.json';


export const login = async (credentials) => {
    // try {
    //     const response = await api.post('/auth/login', credentials);
    //     return response.data;
    // } catch (error) {
    //     console.error("Login failed:", error);
    //     throw error;
    // }
    
    return userData.users.find(user => user.email === credentials.email && user.password === credentials.password);
};

export const register = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error("Register failed:", error);
        throw error;
    }
};