import React from 'react';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
  const { cart } = useAuth();

  console.log(cart);

  return (
    <div>
      <h3 className="font-bold">SHOPPING CART</h3>
      {cart.map((item, key) => (
        <div className="border-2  rounded my-4 py-2 bg-gray-100">
          <div className="">
            <img
              className=" mx-auto rounded-xl "
              width={150}
              src={item.finalImage}
              alt=""
            />
            <h4 className="text-left text-md mb-3 text-center font-bold text-amber-500">
              {item.title.slice(0, 36)}
            </h4>
          </div>
          <div className="">
            <div className="flex justify-around">
              <h4 className="mx-1 font-bold text-sm">
                {' '}
                Color: {item.finalColor}
              </h4>
              <h4 className="mx-1 font-bold text-sm">
                {' '}
                Price: {item.finalPrice}
              </h4>
              <h4 className="mx-1 font-bold text-sm">
                {' '}
                Quantity: {item.finalQuantity}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
