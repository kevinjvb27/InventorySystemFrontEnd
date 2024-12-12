import React, { useEffect, useState } from 'react';
import CategoriesTable from '../components/CategoriesTable';
import CategoryForm from '../components/CategoryForm';
import { Category, CategoryInput } from '../types/category';
import { createCategory, getCategories, updateCategory } from '../services/categoryService';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
      const fetchCategories = async () => {
          const data = await getCategories();
          setCategories(data);
      };
      fetchCategories();
  }, []);

  async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
  }

  const handleCreate = async (newCategory: CategoryInput) => {
      await createCategory(newCategory);
      fetchCategories();
    };
  
  const handleUpdate = async (id: string, updatedCategory: CategoryInput) => {
      await updateCategory(id, updatedCategory);
      fetchCategories();
      setEditingCategory(null);
    };

  return (
      <div>
          <h1>Gestión de Categorias</h1>
          <CategoryForm 
              onFormSubmit={editingCategory ? (data) => handleUpdate(editingCategory.codigocategoria, data) : handleCreate} 
              initialValues={editingCategory || { 
                codigocategoria: '',
                categoria: '',
                descripcion: ''
              }}
          />
          <CategoriesTable 
              categories={categories} 
              onEdit={setEditingCategory}/>
      </div>
  );
};

export default CategoriesPage;