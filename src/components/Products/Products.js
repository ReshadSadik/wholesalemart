import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.wholesalecart.com/v2/product/key-search?source=1688&key=bag&page=2'
    )
      .then((res) => res.json())
      .then((data) => setproducts(data.results));
  }, []);

  return (
    <div className="flex gap-4 flex-wrap mt-20">
      {products.map((product) => (
        <Product product={product} key={product.name}></Product>
      ))}
    </div>
  );
};

export default Products;
