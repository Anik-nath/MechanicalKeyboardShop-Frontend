import {
  CreditCardIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const WhyWe = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 bg-gray-900 py-14 mb-8">
      <div className="py-8">
        <h2 className="md:text-2xl lg:text-2xl text-xl font-bold tracking-tight text-white">
          Why us?{" "}
          <span className="text-gray-500">
            Even more reasons to shop with us.
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-6">
          <TruckIcon className="lg:h-12 lg:w-12 md:h-12 md:w-12 h-8 w-8 primaryColor mb-4"></TruckIcon>
          <p className="text-gray-300 text-justify font-semibold">
            <span className="gradient-text">All orders</span> are packaged with
            and shipped from the from{" "}
            <span className="gradient-text">Labs </span>
            warehouse in BD.
          </p>
        </div>
        <div className="bg-gray-800 p-4">
          <PaperAirplaneIcon className="lg:h-12 lg:w-12 md:h-12 md:w-12 h-8 w-8 primaryColor mb-4"></PaperAirplaneIcon>
          <p className="text-gray-300 text-justify font-semibold">
            <span className="gradient-text">We</span> ship most orders within{" "}
            <span className="gradient-text">24-48 hours</span> and accept
            returns within <span className="gradient-text">14 days</span> of
            receipt.
          </p>
        </div>
        <div className="bg-gray-800 p-4">
          <CreditCardIcon className="lg:h-12 lg:w-12 md:h-12 md:w-12 h-8 w-8 primaryColor mb-4"></CreditCardIcon>
          <p className="text-gray-300 text-justify font-semibold">
            <span className="gradient-text">Easy payment</span> options
            available at checkout, and{" "}
            <span className="gradient-text">interest-free</span>
            payment plans are available.
          </p>
        </div>
        <div className="bg-gray-800 p-4">
          <SparklesIcon className="lg:h-12 lg:w-12 md:h-12 md:w-12 h-8 w-8 primaryColor mb-4"></SparklesIcon>
          <p className="text-gray-300 text-justify font-semibold">
            <span className="gradient-text">Create</span> your dream mechanical
            keyboard from scratch or{" "}
            <span className="gradient-text">customize</span>
            existing ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
