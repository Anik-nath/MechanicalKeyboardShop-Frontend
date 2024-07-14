import markImage from "../../assets/images/faq (1).png";
import headeImage from "../../assets/images/faq (2).png";

const Faq = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-4">
        <div className=" mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl tracking-tight font-bold">
              Frequently Asked
              <span className="gradient-text ml-2">Questions</span>
            </h3>
          </div>

          <div className="mt-10">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className=" sm:flex items-center justify-center p-3 mr-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img src={markImage} alt="" />
                  </div>
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <h4 className="text-lg leading-6 font-medium ">
                      How long does shipping take?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <p className="text-md">
                      Generally, we ship orders within 24-48 business hours, but
                      the shipping speed depends on the selected shipping
                      carrier selected at checkout.
                    </p>
                  </div>
                  <div className=" sm:flex items-center justify-center p-3 ml-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img className="w-7" src={headeImage} alt="" />
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className=" sm:flex items-center justify-center p-3 mr-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img src={markImage} alt="" />
                  </div>
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <h4 className="text-lg leading-6 font-medium ">
                      How much does shipping cost?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <p className=" text-md">
                      Shipping costs will vary depending on your location.
                      Please note heavier items (such as mouse pads and switch
                      containers) will result in higher shipping costs.
                    </p>
                  </div>
                  <div className=" sm:flex items-center justify-center p-3 ml-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img className="w-7" src={headeImage} alt="" />
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className=" sm:flex items-center justify-center p-3 mr-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img src={markImage} alt="" />
                  </div>
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <h4 className="text-lg leading-6 font-medium ">
                      Why do I see the error "Shipping information is required"
                      on checkout?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-gray-800 p-5 px-10 w-full flex items-center">
                    <p className="text-md">
                      If you see this error, it may be because you tried using a
                      different shipping address with an Express Payment option
                      such as Apple Pay or PayPal Express. Please clear your
                      browser cache and cookies and try again without using an
                      Express Payment method.
                    </p>
                  </div>
                  <div className=" sm:flex items-center justify-center p-3 ml-3 rounded-full gradient-border text-white border-4 border-white text-xl font-semibold">
                    <img className="w-7" src={headeImage} alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
