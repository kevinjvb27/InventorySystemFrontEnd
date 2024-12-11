import { useEffect, useState } from 'react';
import { fetchRoles, createRole, updateRole, deleteRole } from '../services/rolesService';
import RoleForm from '../components/RoleForm';
import RolesTable from '../components/RolesTable';
import { Role } from '../types/role';

const RolesPage = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const loadRoles = async () => {
    const data = await fetchRoles();
    setRoles(data);
  };

  useEffect(() => {
    loadRoles();
  }, []);

  const handleCreate = async (newRole: Omit<Role, "codigorol">) => {
    await createRole(newRole);
    loadRoles();
  };

  const handleUpdate = async (id: string, updatedRole: Omit<Role, "codigorol">) => {
    await updateRole(id, updatedRole);
    loadRoles();
    setEditingRole(null);
  };

  const handleDelete = async (id: string) => {
    await deleteRole(id);
    loadRoles();
  };

  return (
    <div>
      <h1>Gestión de Roles</h1>
      <RoleForm 
        onSubmit={editingRole ? (data) => handleUpdate(editingRole.codigorol, data) : handleCreate} 
        initialValues={editingRole || { rol: '', descripcion: '' }} 
      />
      <RolesTable 
        roles={roles} 
        onEdit={setEditingRole} 
        onDelete={handleDelete} 
      />
    </div>
  );
};

export default RolesPage;