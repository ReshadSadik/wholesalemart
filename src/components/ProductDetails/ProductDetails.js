import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [image, setimage] = useState('');
  const [color, setColor] = useState('black');
  const selectedProduct = product.data;
  const variations = selectedProduct?.product_details?.groups.Color.values;

  if (variations) {
    var variationKeys = Object.keys(variations);
  }
  useEffect(() => {
    fetch(
      `https://api.wholesalecart.com/v2/product/details?product_code=${id}&source=1688`
    )
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const handleImg = (img, color) => {
    setimage(img);
    setColor(color);
  };
  return (
    <div>
      {product.data && (
        <div className="container mx-auto bg-white rounded p-5">
          <h2 className="text-left py-4 text-xl font-bold text-gray-700">
            {selectedProduct.title}
          </h2>
          <hr className="py-5" />
          <div className="flex justify-around px-5 pb-5">
            <div className="flex flex-col items-center">
              <img width={555} src={image || selectedProduct.image} alt="" />
              <div className="flex flex-wrap gap-2 py-4">
                {variationKeys.map((variation) => (
                  <div>
                    <img
                      onClick={() => {
                        handleImg(variations[variation], variation);
                      }}
                      className="rounded-xl border-2 cursor-pointer"
                      width={50}
                      src={variations[variation]}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex gap-5 ">
                {selectedProduct.product_details.ranges.map((range) => (
                  <button className={styles.detailsBtn}>
                    <span className=" text-2xl"> ${range.price} </span> <br />
                    {range.minimum_qty} or more
                  </button>
                ))}
              </div>
              <h3 className="text-left font-bold mt-4 text-lg">
                color : {color}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
