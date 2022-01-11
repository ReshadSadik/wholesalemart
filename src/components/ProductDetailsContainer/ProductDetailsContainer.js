import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductDetailsContainer = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex">
        <div className="flex-1 mt-20">
          <ProductDetails></ProductDetails>
        </div>
        <div>
          {/* offcanvas start */}
          <button
            class="inline-block px-6 py-2.5 bg-amber-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mr-1.5  absolute bottom-20 right-20"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Open Cart
          </button>

          <div
            class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header flex items-center justify-between p-4">
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
              <Cart></Cart>
            </div>
          </div>
          {/* offcanvas end */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
