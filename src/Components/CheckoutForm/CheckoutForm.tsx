import { ArrowLeftIcon, TruckIcon } from "@heroicons/react/24/outline";

const CheckoutForm = () => {
  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-2xl font-semibold text-white mb-4">Checkout</h1>

      {/* <!-- Shipping Address --> */}
      <div className="my-10">
        <h2 className="text-xl font-semibold text-white  mb-2">
          Shipping Address
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-white mb-1">
              Firstname
            </label>
            <input
              placeholder="Anik"
              type="text"
              id="firstname"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-white mb-1">
              Lastname
            </label>
            <input
              placeholder="Nath"
              type="text"
              id="last_name"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              placeholder="example@gmail.com"
              type="text"
              id="email"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white  mb-1">
              Phone
            </label>
            <input
              placeholder="018XXXXXXXX"
              type="text"
              id="phone"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="address" className="block text-white  mb-1">
            Address
          </label>
          <input
            placeholder="Ex: 123 road, ABCD building, Ctg"
            type="text"
            id="address"
            className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block text-white  mb-1">
              City
            </label>
            <input
              placeholder=""
              type="text"
              id="city"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-white  mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-white  mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
        </div>
      </div>

      {/* <!-- Payment Information --> */}
      <div>
        <h2 className="text-xl font-semibold text-white  mb-2">
          Payment Information
        </h2>
        <div className="mt-4">
          <label htmlFor="card_number" className="block text-white  mb-1">
            Card Number
          </label>
          <input
            type="text"
            id="card_number"
            className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="exp_date" className="block text-white  mb-1">
              Expiration Date
            </label>
            <input
              type="text"
              id="exp_date"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-white  mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full bg-transparent gradient-border text-white outline-none border py-2 px-3   "
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <a
          href="/products"
          className="flex items-center font-semibold gradient-text text-sm"
        >
          <ArrowLeftIcon className="w-5 h-5 text-white"></ArrowLeftIcon>
          Continue Shopping
        </a>
        <button className="flex items-center justify-center gradient-button shadow-sm">
          <TruckIcon className="h-5 w-5 mr-2"></TruckIcon>
          <span>Shipping order</span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
