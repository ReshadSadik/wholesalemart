import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = (props) => {
  const { name, img, regular_price, total_sold, product_code } = props.product;
  return (
    <div className="block rounded bg-white px-5 hover:shadow-lg">
      <Link to={`/product/${product_code}`}>
        <div>
          <img className={styles.productImg} src={img} alt="" />
        </div>
        <h4 className={styles.productTitle}>{name.slice(0, 38)}</h4>
        <div className="flex justify-between py-2 ">
          <p className="font-bold">${regular_price}</p>
          <p className={styles.productSold}>SOLD:{total_sold}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
