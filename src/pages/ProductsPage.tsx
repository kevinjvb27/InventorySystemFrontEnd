import React, { useEffect, useState } from 'react';
import ProductsTable from '../components/ProductsTable';
import ProductForm from '../components/ProductForm';
import { createProduct, getAllProducts, updateProduct } from '../services/productService';
import { Product, ProductInput } from '../types/product';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data);
    }

    const handleCreate = async (newProduct: ProductInput) => {
        await createProduct(newProduct);
        fetchProducts();
      };
    
    const handleUpdate = async (id: string, updatedProduct: ProductInput) => {
        await updateProduct(id, updatedProduct);
        fetchProducts();
        setEditingProduct(null);
      };

    return (
        <div>
            <h1>Gestión de Productos</h1>
            <ProductForm 
                onFormSubmit={editingProduct ? (data) => handleUpdate(editingProduct.codigoproducto, data) : handleCreate} 
                initialValues={editingProduct || { 
                    codigoproducto: '',
                    producto: '',
                    descripcion: '',
                    precio: 0,
                    cantidad: 0,
                    activo: true,
                    codigocategoria: ''
                }}
            />
            <ProductsTable 
                products={products} 
                onEdit={setEditingProduct}/>
        </div>
    );
};

export default ProductsPage;