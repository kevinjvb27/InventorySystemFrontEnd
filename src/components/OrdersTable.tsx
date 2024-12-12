import React from 'react';
import { Order } from '../types/order';

type OrdersTableProps = {
  orders: Order[];
  onEdit: (order: Order) => void;
};

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Código Orden</th>
          <th>Responsable</th>
          <th>Detalle</th>
          <th>Fecha Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.codigoOrden}>
            <td>{order.codigoOrden}</td>
            <td>{order.responsable}</td>
            <td>
              {order.detalleOrden.map(detail => (
                <div key={detail.codigoDetalleOrden}>
                  {detail.codigoProducto} - Cantidad: {detail.cantidad} - Precio: {detail.precio}
                </div>
              ))}
            </td>
            <td>{new Date(order.fechaCreacion).toLocaleString()}</td>
            <td>
              <button onClick={() => onEdit(order)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;