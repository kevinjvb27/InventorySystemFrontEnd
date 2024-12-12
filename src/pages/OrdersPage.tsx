import React, { useEffect, useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import OrderForm from '../components/OrderForm';
import { fetchOrders, createOrder, updateOrder } from '../services/orderService';
import { Order, NewOrder } from '../types/order';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  useEffect(() => {
    const fetchAllOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };
    fetchAllOrders();
  }, []);

  async function fetchAllOrders() {
    const data = await fetchOrders();
    setOrders(data);
  }

  const handleCreate = async (newOrder: NewOrder) => {
    await createOrder(newOrder);
    fetchAllOrders();
  };

  const handleUpdate = async (codigoOrden: number, updatedOrder: NewOrder) => {
    await updateOrder(codigoOrden, updatedOrder);
    fetchAllOrders();
    setEditingOrder(null);
  };

  return (
    <div>
      <h1>Gestión de Órdenes</h1>
      <OrderForm 
        onFormSubmit={editingOrder ? (data) => handleUpdate(editingOrder.codigoOrden, data) : handleCreate} 
        initialValues={editingOrder || {
          responsable: '',
          detalleOrden: []
        }}
      />
      <OrdersTable 
        orders={orders} 
        onEdit={setEditingOrder} 
      />
    </div>
  );
};

export default OrdersPage;