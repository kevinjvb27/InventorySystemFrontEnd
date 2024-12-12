import axios from 'axios';
import { getToken } from '../utils/tokenManager';
import { Order, NewOrder } from '../types/order';

const API_URL = '/api/ordenes';

export const fetchOrders = async (): Promise<Order[]> => {
  const token = getToken();
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
  return response.data;
};

export const createOrder = async (order: NewOrder): Promise<Order> => {
  const token = getToken();
  const response = await axios.post(API_URL, order, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateOrder = async (codigoOrden: number, order: NewOrder): Promise<Order> => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/${codigoOrden}`, order, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};