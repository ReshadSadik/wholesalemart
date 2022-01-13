import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setproducts] = useState([]);
  const [itemKey, setItemKey] = useState('bag');
  const handleShoe = () => {
    setItemKey('shoe');
  };
  const handleBag = () => {
    setItemKey('bag');
  };
  const handleWatch = () => {
    setItemKey('watch');
  };
  useEffect(() => {
    fetch(
      `https://api.wholesalecart.com/v2/product/key-search?source=1688&key=${itemKey}&page=2`
    )
      .then((res) => res.json())
      .then((data) => setproducts(data.results));
  }, [itemKey]);

  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col mt-10 md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li onClick={handleBag} className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Bags
          </a>
        </li>
        <li onClick={handleShoe} className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Shoes
          </a>
        </li>
        <li onClick={handleWatch} className="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            watches
          </a>
        </li>
      </ul>

      <div className="flex gap-4 flex-wrap mt-20">
        {products.map((product) => (
          <Product product={product} key={product.name}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
