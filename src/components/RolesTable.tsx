import { Role } from '../types/role';

interface RolesTableProps {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (id: number) => void;
}

const RolesTable = ({ roles, onEdit, onDelete }: RolesTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rol</th>
          <th>Descripción</th>
          <th>Fecha de Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.codigoRoles}>
            <td>{role.rol}</td>
            <td>{role.descripcion}</td>
            <td>{role.fechacreacion ? new Date(role.fechacreacion).toLocaleString() : 'Fecha no disponible'}</td>
            <td>
              <button onClick={() => onEdit(role)}>Editar</button>
              <button onClick={() => onDelete(role.codigoRoles)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolesTable;