import React, { useEffect, useState } from 'react';
import { UserInput } from '../types/user';
import { Role } from '../types/role';
import { fetchRoles } from '../services/rolesService';

type UserFormProps = {
    onFormSubmit: (data: UserInput) => void;
    initialValues: UserInput;
};

const UserForm: React.FC<UserFormProps> = ({ onFormSubmit, initialValues }) => {
    const [formValues, setFormValues] = useState<UserInput>(initialValues);
    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        const loadRoles = async () => {
            const rolesData = await fetchRoles();
            setRoles(rolesData);
        };
        loadRoles();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFormSubmit(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Contraseña:
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    name="apellido"
                    value={formValues.apellido}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Rol:
                <select
                    name="codigorol"
                    value={formValues.codigorol}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Selecciona un rol</option>
                    {roles.map((role) => (
                        <option key={role.codigoRoles} value={role.codigoRoles}>
                            {role.rol}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">{initialValues.username ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default UserForm;
