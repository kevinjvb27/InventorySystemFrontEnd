import { Category } from '../types/category';

interface CategoriesTableProps {
  categories: Category[];
  onEdit: (category: Category) => void;
}

const CategoriesTable = ({ categories, onEdit}: CategoriesTableProps) => {
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
        {categories.map((category) => (
          <tr key={category.codigocategoria}>
            <td>{category.categoria}</td>
            <td>{category.descripcion}</td>
            <td>{category.fechacreacion ? new Date(category.fechacreacion).toLocaleString() : 'Fecha no disponible'}</td>
            <td>
              <button onClick={() => onEdit(category)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;