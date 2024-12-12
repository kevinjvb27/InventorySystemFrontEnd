export interface Category {
    codigocategoria: string;
    categoria: string;
    descripcion: string;
    fechacreacion?: string;
}

export type CategoryInput = Omit<Category, 'fechacreacion'>;