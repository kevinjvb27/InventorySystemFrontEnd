import { useState } from 'react';
import { Role } from '../types/role';

interface RoleFormProps {
  onSubmit: (data: Omit<Role, "codigorol">) => void;
  initialValues: Omit<Role, "codigorol">;
}

const RoleForm = ({ onSubmit, initialValues }: RoleFormProps) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rol:</label>
        <input 
          type="text" 
          name="rol" 
          value={formData.rol} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input 
          type="text" 
          name="descripcion" 
          value={formData.descripcion} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">{initialValues.codigorol ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default RoleForm;