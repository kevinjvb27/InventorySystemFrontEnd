import axios from 'axios';
import { getToken } from '../utils/tokenManager';
import { Category, CategoryInput } from '../types/category';

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

  export const createCategory = async (category: Category)=> {
    const token = getToken();
    const response = await axios.post(API_URL, category, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  export const updateCategory = async (id: string, category: CategoryInput) => {
    const token = getToken();
    const response = await axios.put(`${API_URL}/${id}`, category, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };