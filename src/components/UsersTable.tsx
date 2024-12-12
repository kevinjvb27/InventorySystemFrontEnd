import React from 'react';
import { User } from '../types/user';

type UsersTableProps = {
    users: User[];
    onEdit: (user: User) => void;
};

const UsersTable: React.FC<UsersTableProps> = ({ users, onEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Código Rol</th>
                    <th>Fecha Creación</th>
                    <th>Última Modificación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.username}>
                        <td>{user.username}</td>
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.codigorol}</td>
                        <td>{new Date(user.fechacreacion).toLocaleString()}</td>
                        <td>{new Date(user.fechamodificacion).toLocaleString()}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
