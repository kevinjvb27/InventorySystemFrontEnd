import React from 'react';

interface Category {
  codigoCategoria: string;
  categoria: string;
  descripcion: string;
  fechaCreacion: string;
}

const CategoriesForm = () => {
  const categories: Category[] = [
    {
      codigoCategoria: '001',
      categoria: 'Electrónica',
      descripcion: 'Dispositivos electrónicos y accesorios',
      fechaCreacion: '2024-12-01',
    },
    {
      codigoCategoria: '002',
      categoria: 'Ropa',
      descripcion: 'Vestimenta y accesorios de moda',
      fechaCreacion: '2024-12-05',
    },
  ];

  return (
    <div>
      <h2>Listado de Categorías</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Código</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Categoría</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Descripción</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <tr key={category.codigoCategoria}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{category.codigoCategoria}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{category.categoria}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{category.descripcion}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{category.fechaCreacion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: '10px' }}>
                No hay categorías disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesForm;
