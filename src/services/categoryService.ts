import axios from 'axios';
import { getToken } from '../utils/tokenManager';

const API_URL = '/api/categorias';

export const getCategories = async () => {
    const token = getToken();
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    return response.data;
  };