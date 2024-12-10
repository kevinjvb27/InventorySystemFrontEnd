import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Bienvenido al Sistema de Inventario</h1>
      <nav>
        <ul>
          <li><Link to="/products">Gestión de Productos</Link></li>
          <li><Link to="/categories">Gestión de Categorías</Link></li>
          <li><Link to="/orders">Gestión de Órdenes</Link></li>
          <li><Link to="/users">Gestión de Usuarios</Link></li>
          <li><Link to="/roles">Gestión de Roles</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;