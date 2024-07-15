import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="pt-10 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="sm:flex gap-4 mb-10 px-6 md:px-0">
          {/* Checkout form */}
          <div className="w-full sm:w-3/4">
            <div className="md:flex bg-gray-800 items-strech py-8 md:py-10 lg:py-8">
              <CheckoutForm></CheckoutForm>
            </div>
          </div>
          {/* order summary */}
          <div className="w-full sm:w-1/4 md:w-2/4 bg-gray-800 p-10">
            <h2 className="text-xl font-semibold text-white  mb-2">
              Order Summary
            </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
