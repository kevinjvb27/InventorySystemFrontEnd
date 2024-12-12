export interface Order {
    codigoOrden: number;
    responsable: string;
    fechaCreacion: string;
    detalleOrden: OrderDetail[];
  }
  
  export interface OrderDetail {
    codigoDetalleOrden?: number;
    codigoProducto: string;
    cantidad: number;
    precio?: number;
  }
  
  export type NewOrder = Omit<Order, 'codigoOrden' | 'fechaCreacion'>;

  export type OrderFormDetail = Omit<OrderDetail, 'precio'>;