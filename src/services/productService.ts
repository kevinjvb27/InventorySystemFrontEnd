import axios from 'axios';
import { Product, ProductInput} from '../types/product';
import { getToken } from '../utils/tokenManager';

const API_URL = '/api/productos';

export const getAllProducts = async () => {
    const token = getToken();
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    return response.data;
  };

export const createProduct = async (product: Product)=> {
    const token = getToken();
    const response = await axios.post(API_URL, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  export const updateProduct = async (id: string, product: ProductInput) => {
    const token = getToken();
    const response = await axios.put(`${API_URL}/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };