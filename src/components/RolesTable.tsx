import { Role } from '../types/role';

interface RolesTableProps {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (id: string) => void;
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
          <tr key={role.codigorol}>
            <td>{role.rol}</td>
            <td>{role.descripcion}</td>
            <td>{new Date(role.fechacreacion).toLocaleString()}</td>
            <td>
              <button onClick={() => onEdit(role)}>Editar</button>
              <button onClick={() => onDelete(role.codigorol)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolesTable;