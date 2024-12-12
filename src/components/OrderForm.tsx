import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';
import { Product } from '../types/product';
import { NewOrder, OrderDetail } from '../types/order';

type OrderFormProps = {
  onFormSubmit: (data: NewOrder) => void;
  initialValues: NewOrder;
};

const OrderForm: React.FC<OrderFormProps> = ({ onFormSubmit, initialValues }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>(initialValues.detalleOrden || []);
  const [responsable, setResponsable] = useState(initialValues.responsable);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.filter(product => product.activo));
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setOrderDetails([...orderDetails, { codigoProducto: '', cantidad: 1 }]);
  };

  const handleProductChange = (index: number, field: string, value: any) => {
    const updatedDetails = [...orderDetails];
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    setOrderDetails(updatedDetails);
  };

  const calculateSubtotal = (detail: OrderDetail) => {
    const product = products.find(p => p.codigoproducto === detail.codigoProducto);
    return product ? detail.cantidad * product.precio : 0;
  };

  const calculateTotal = () => {
    return orderDetails.reduce((total, detail) => total + calculateSubtotal(detail), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit({ responsable, detalleOrden: orderDetails });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Responsable:
        <input
          type="text"
          value={responsable}
          onChange={(e) => setResponsable(e.target.value)}
          required
        />
      </label>
      <button type="button" onClick={handleAddProduct}>Añadir Producto</button>
      {orderDetails.map((detail, index) => (
        <div key={index}>
          <select
            value={detail.codigoProducto}
            onChange={(e) => handleProductChange(index, 'codigoProducto', e.target.value)}
            required
          >
            <option value="">Seleccione un producto</option>
            {products.map(product => (
              <option key={product.codigoproducto} value={product.codigoproducto}>
                {product.producto}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={detail.cantidad}
            onChange={(e) => handleProductChange(index, 'cantidad', parseInt(e.target.value, 10))}
            min="1"
            required
          />
          Subtotal: {calculateSubtotal(detail).toFixed(2)}
        </div>
      ))}
      <p>Total: {calculateTotal().toFixed(2)}</p>
      <button type="submit">{initialValues.detalleOrden.length ? 'Actualizar' : 'Crear'} Orden</button>
    </form>
  );
};

export default OrderForm;