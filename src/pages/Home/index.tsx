import React, { useCallback, useEffect, useState } from 'react';

import { Contaier, Products } from './styles';
import Nav from '../../components/Nav';

import { usecart } from '../../hooks/cart';
import { getCategories, getProductsByCategoryId } from '../../services/api';

import ICategory from '../../interfaces/ICategory';
import IProduct from '../../interfaces/IProduct';

function Home() {
  const { cart, addToCart, removeFromCart } = usecart();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleCategoryChange = useCallback(async (categoryId: number) => {
    setProducts(await getProductsByCategoryId(categoryId));
  }, []);

  useEffect(() => {
    const getData = async () => {
      const [categoriesData, productsData] = await Promise.all([
        getCategories(),
        getProductsByCategoryId(0),
      ]);

      setCategories(categoriesData);
      setProducts(productsData);
    };

    getData();
  }, []);

  return (
    <>
      <Nav />
      <Contaier>
        <select
          onChange={({ target }) => handleCategoryChange(Number(target.value))}
        >
          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <Products>
          {products.map(p => (
            <div key={p.name}>
              <img
                src={`images/products/product-${p.id}.jpg`}
                alt={p.description}
              />
              <p>{p.name}</p>
              {cart.filter(i => i.id === p.id).length > 0 ? (
                <button onClick={() => removeFromCart(p.id)} type="button">
                  Remover do carrinho
                </button>
              ) : (
                <button onClick={() => addToCart(p)} type="button">
                  Adicionar ao carrinho
                </button>
              )}
            </div>
          ))}
        </Products>
      </Contaier>
    </>
  );
}

export default Home;
