import React from 'react';
import { Product } from '../types/product';

type ProductsTableProps = {
    products: Product[];
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Activo</th>
                    <th>Categoría</th>
                    <th>Fecha Creación</th>
                    <th>Última Modificación</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.codigoproducto}>
                        <td>{product.codigoproducto}</td>
                        <td>{product.producto}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.precio}</td>
                        <td>{product.cantidad}</td>
                        <td>{product.activo ? 'Sí' : 'No'}</td>
                        <td>{product.codigocategoria}</td>
                        <td>{product.fechacreacion ? new Date(product.fechacreacion).toLocaleString() : 'Fecha no disponible'}</td>
                        <td>{product.modificacion ? new Date(product.modificacion).toLocaleString() : 'Fecha no disponible'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductsTable;
