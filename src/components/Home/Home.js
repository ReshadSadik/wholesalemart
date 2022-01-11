import React from 'react';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="flex items-center justify-center p-6 container mx-auto">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
