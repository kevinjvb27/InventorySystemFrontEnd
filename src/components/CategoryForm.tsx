import React, { useState } from 'react';
import { CategoryInput } from '../types/category';

type CategoryFormProps = {
    onFormSubmit: (data: CategoryInput) => void;
    initialValues: CategoryInput;
};

const ProductForm: React.FC<CategoryFormProps> = ({ onFormSubmit, initialValues }) => {
    const [formValues, setFormValues] = useState<CategoryInput>(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            onFormSubmit(formValues);
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Código Categoria:
                <input
                    type="text"
                    name="codigocategoria"
                    value={formValues.codigocategoria}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Categoria:
                <input
                    type="text"
                    name="categoria"
                    value={formValues.categoria}
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
            <button type="submit">{initialValues.categoria ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default ProductForm;