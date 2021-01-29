import Categories from './categories';
import Products from './Products';

function getCategories() {
  return Categories;
}

function getProductsByCategoryId(id: number) {
  return Products.filter(p => p.idCategory === id);
}

function getProductById(id: number) {
  return Products.find(p => p.id === id);
}

export { getCategories, getProductsByCategoryId, getProductById };
