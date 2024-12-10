import axios from 'axios';

export const loginUser = async (credentials: { username: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:8080/api/usuarios/login', credentials);
    const token = response.data;
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};