import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const selectedProduct = product.data;

  const variations = selectedProduct?.product_details?.groups.Color.values;
  const [image, setimage] = useState('');
  const [color, setColor] = useState('black');
  const [quantity, setquantity] = useState(0);
  const [price, setPrice] = useState(0);

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
  const handleDecrement = () => {
    // const oldQuantity = document.getElementById('quantity').value;
    setquantity(quantity - 1);
    setPrice(price - selectedProduct.regular_price);
  };
  const handleIncrement = () => {
    setquantity(quantity + 1);
    setPrice(selectedProduct.regular_price + price);
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
              <div className="rounded-xl border-2 mt-40">
                <div className="flex justify-between bg-gray-200 p-4">
                  <div className="flex gap-3 items-center">
                    From China
                    <img
                      width={20}
                      src="https://wholesalecart.com/static/media/cn.10077f3e.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    To Bangladesh
                    <img
                      width={20}
                      src="https://wholesalecart.com/static/media/bd.7b147c00.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-between p-4">
                  <div>
                    {/* Product Quantity : <span className="font-bold">0</span>{' '} */}

                    <div class="custom-number-input  gap-3 items-center h-10 w-full flex">
                      <label
                        for="custom-input-number"
                        class="w-full text-gray-700 text-sm font-semibold "
                      >
                        Product Quantity
                      </label>
                      <div class="flex flex-row items-center h-10   w-24 rounded-lg relative bg-transparent mt-1">
                        {quantity > 0 && (
                          <button
                            onClick={handleDecrement}
                            data-action="decrement"
                            class=" bg-gray-300 line text-gray-600 pb-3 h-7 w-20 rounded-l cursor-pointer outline-none "
                          >
                            <span class="m-auto leading-[1] text-2xl font-bold">
                              -
                            </span>
                          </button>
                        )}
                        <input
                          id="quantity"
                          type="number"
                          class="outline-none ml-2 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                          name="custom-input-number"
                          value={quantity}
                        />
                        <button
                          onClick={handleIncrement}
                          data-action="increment"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-7 w-20 rounded-r cursor-pointer"
                        >
                          <span class="m-auto text-2xl font-bold leading-[1] ">
                            +
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    Product Price : $ <span className="font-bold">{price}</span>{' '}
                  </div>
                </div>
                <hr />
                <h2 className="text-left py-4 px-2 font-bold text-gray-600">
                  Shipping Method : By Air(12-24) Days
                </h2>
                <hr />
                <h2 className="text-left py-4 px-2 font-bold text-gray-600">
                  Shipping Charge : $630 per kg
                </h2>
                <hr />
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-amber-300 font-bold px-9 py-3 mx-4 rounded-xl ">
                  Save
                </button>
                <button className="bg-amber-300 font-bold px-9 py-3 mx-4 rounded-xl ">
                  Add to Cart
                </button>
                <button className="bg-amber-300 font-bold px-9 py-3 mx-4 rounded-xl ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
