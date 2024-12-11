import React, { useEffect, useState } from 'react';
import ProductsTable from '../components/ProductsTable';
import ProductForm from '../components/ProductForm';
import { getAllProducts } from '../services/productService';
import { Product } from '../types/product';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Gestión de Productos</h1>
            <button onClick={() => setFormVisible(!isFormVisible)}>
                {isFormVisible ? 'Cerrar Formulario' : 'Añadir Producto'}
            </button>
            {isFormVisible && <ProductForm onFormSubmit={() => {
                setFormVisible(false);
                fetchProducts();
            }} />}
            <ProductsTable products={products} />
        </div>
    );

    async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data);
    }
};

export default ProductsPage;