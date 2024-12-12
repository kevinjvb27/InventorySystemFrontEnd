import axios from 'axios';
import { User, UserInput } from '../types/user';
import { getToken } from '../utils/tokenManager';

const API_URL = '/api/usuarios';

export const getAllUsers = async (): Promise<User[]> => {
    const token = getToken();
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
    });
    return response.data;
};

export const createUser = async (user: UserInput): Promise<void> => {
    const token = getToken();
    await axios.post(API_URL, user, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const updateUser = async (username: string, user: UserInput): Promise<void> => {
    const token = getToken();
    await axios.put(`${API_URL}/${username}`, user, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
