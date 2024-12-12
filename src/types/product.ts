export interface Product {
    codigoproducto: string;
    producto: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    activo: boolean;
    codigocategoria: string;
    fechacreacion?: string;
    modificacion?: string;
}

export type ProductInput = Omit<Product, 'fechacreacion' | 'modificacion'>;