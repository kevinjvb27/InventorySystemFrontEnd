import axios from 'axios';
import { Role } from '../types/role';
import { getToken } from '../utils/tokenManager';

const API_URL = '/api/roles';

export const fetchRoles = async () => {
  const token = getToken();
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
  console.log(response.data)
  return response.data;
};

export const createRole = async (role: Omit<Role, "codigoRoles">) => {
  const token = getToken();
  const response = await axios.post(API_URL, role, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const updateRole = async (id: number, role: Omit<Role, "codigoRoles">) => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/${id}`, role, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const deleteRole = async (id: number) => {
  const token = getToken();
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};