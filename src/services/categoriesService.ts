import axios from "axios";
import { getToken } from "../utils/tokenManager";

const API_URL = "http://localhost:8080/api/categorias";

export const fetchCategorias = async () => {
  const token = getToken();
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchCategoriaById = async (id: string) => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createCategoria = async (categoria: {
  categoria: string;
  descripcion: string;
}) => {
  const token = getToken();
  const response = await axios.post(API_URL, categoria, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateCategoria = async (
  id: string,
  categoria: { categoria: string; descripcion: string }
) => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/${id}`, categoria, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteCategoria = async (id: string) => {
  const token = getToken();
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
