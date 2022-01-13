import { useState } from 'react';

const useItems = () => {
  const [cart, setCart] = useState([]);
  return {
    cart,
    setCart,
  };
};

export default useItems;
