import {
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "90.00",
      quantity: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
  ];
  return (
    <div className="bg-gray-900 py-8">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="sm:flex gap-4 mb-10 px-6 md:px-0">
          {/* shopping cart */}
          <div className="w-full sm:w-3/4">
            <div className="flex bg-gray-800 p-10 mb-4 justify-between pb-10">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            {/* show cart list  start here */}
            <div className="md:flex bg-gray-800 items-strech py-8 md:py-10 lg:py-8">
              {products.map((product) => (
                <li key={product.id} className="flex p-2 px-10 w-full ">
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-white">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">
                          Total Price:
                          <span className="text-xl">${product.price}</span>
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-300">
                        Brand: {product.color}
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        Price: ${product.price}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div id="quantity">
                        <p className="mt-4 font-semibold">Total Quantity</p>
                        <div className="flex items-center mt-2">
                          <button className="gradient-border hover:bg-gray-700 inline-flex items-center p-2">
                            <MinusIcon className="w-4 h-4"></MinusIcon>
                          </button>
                          <div className="px-4 py-1">
                            <p className="text-lg font-semibold">
                              {product.quantity}
                            </p>
                          </div>
                          <button className="gradient-border hover:bg-gray-700 inline-flex items-center p-2">
                            <PlusIcon className="w-4 h-4"></PlusIcon>
                          </button>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="flex flex-row items-center justify-center text-md gradient-text"
                        >
                          <TrashIcon className="h-4 primaryColor"></TrashIcon>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
            {/* show cart list end here */}
            <div>
              <a
                href="/products"
                className="flex items-center font-semibold gradient-text text-sm my-10"
              >
                <ArrowLeftIcon className="w-5 h-5 text-white"></ArrowLeftIcon>
                Continue Shopping
              </a>
            </div>
          </div>
          {/* order summary */}
          <div className="w-full sm:w-1/4 md:w-1/4 bg-gray-800 p-10">
            <h1 className="font-semibold text-2xl border-b border-gray-700 pb-10">
              Order Summary
            </h1>
            <div className="flex justify-between mt-8 tracking-wider">
              <p className="font-semibold text-sm ">Subtotal :</p>
              <span className="font-semibold text-sm">$180</span>
            </div>
            <div className="flex justify-between font-semibold my-4 tracking-wider">
              <p>Taxes :</p>
              <p>$10</p>
            </div>
            <div className="flex justify-between font-semibold tracking-wider">
              <p>Shipping Fee:</p>
              <p>$10</p>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm"
              >
                Promo Code
              </label>
              <div className="flex flex-row items-center gap-4">
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full bg-transparent border border-gray-600 outline-none"
                />
                <button className="gradient-border hover:bg-gray-700 px-5 py-2 text-sm text-white uppercase">
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t border-gray-600 mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm tracking-wider">
                <span>Total cost</span>
                <span>$200</span>
              </div>
              <a
                      href="/checkout"
                      className="flex items-center justify-center gradient-button shadow-sm"
                    >
                      <ShoppingBagIcon className="h-5 w-5 mr-2"></ShoppingBagIcon>
                      <span>Checkout</span>
                    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
