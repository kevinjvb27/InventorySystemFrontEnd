import React, { useState, useEffect } from 'react';
import UsersTable from '../components/UsersTable';
import UserForm from '../components/UserForm';
import { createUser, getAllUsers, updateUser } from '../services/userService';
import { User, UserInput } from '../types/user';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    async function fetchUsers() {
            const data = await getAllUsers();
            setUsers(data);
        }

    const handleCreate = async (newUser: UserInput) => {
        await createUser(newUser);
        fetchUsers();
    };

    const handleUpdate = async (username: string, updatedUser: UserInput) => {
        await updateUser(username, updatedUser);
        fetchUsers();
        setEditingUser(null);
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UserForm
                onFormSubmit={editingUser ? (data) => handleUpdate(editingUser.username, data) : handleCreate}
                initialValues={editingUser || { username: '', password: '', nombre: '', apellido: '', codigorol: 0 }}
            />
            <UsersTable users={users} onEdit={setEditingUser} />
        </div>
    );
};

export default UsersPage;
