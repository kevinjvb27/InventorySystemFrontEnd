import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/categoryService';
import { Category } from '../types/category';
import { ProductInput } from '../types/product';

type ProductFormProps = {
    onFormSubmit: (data: ProductInput) => void;
    initialValues: ProductInput;
};

const ProductForm: React.FC<ProductFormProps> = ({ onFormSubmit, initialValues }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [formValues, setFormValues] = useState<ProductInput>(initialValues);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            onFormSubmit(formValues);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Código Producto:
                <input
                    type="text"
                    name="codigoproducto"
                    value={formValues.codigoproducto}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Producto:
                <input
                    type="text"
                    name="producto"
                    value={formValues.producto}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Descripción:
                <input
                    type="text"
                    name="descripcion"
                    value={formValues.descripcion}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Precio:
                <input
                    type="number"
                    name="precio"
                    value={formValues.precio}
                    onChange={handleInputChange}
                    min="0"
                    required
                />
            </label>
            <label>
                Cantidad:
                <input
                    type="number"
                    name="cantidad"
                    value={formValues.cantidad}
                    onChange={handleInputChange}
                    min="0"
                    required
                />
            </label>
            <label>
                Activo:
                <input
                    type="checkbox"
                    name="activo"
                    checked={formValues.activo}
                    onChange={() =>
                        setFormValues({ ...formValues, activo: !formValues.activo })
                    }
                />
            </label>
            <label>
                Categoría:
                <select
                    name="codigocategoria"
                    value={formValues.codigocategoria}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Seleccione una categoría</option>
                    {categories.map((category) => (
                        <option key={category.codigocategoria} value={category.codigocategoria}>
                            {category.categoria}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">{initialValues.producto ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default ProductForm;