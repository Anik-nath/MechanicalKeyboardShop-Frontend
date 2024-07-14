const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-4">
        <div className="max-w-screen-m mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl tracking-tight font-bold">
              Return & Refund
              <span className="gradient-text ml-2">Policy</span>
            </h3>
          </div>

          <div className="mt-10">
            <p className="pb-8 text-lg text-gray-200 text-justify">
              Within 14 days of receiving the item, you may return any unused
              products for a complete refund less the shipping and handling
              charges (including the return label) and a 5% stocking fee. When
              the item(s) arrive, we will check to make sure they are in their
              original condition.
            </p>
            <p className="pb-8 text-lg text-gray-200 text-justify">
              Please get in touch with us if you receive a damaged item, and
              we'll give you a free replacement or a complete refund. You have
              14 days from the time you receive your return label to send the
              return (or else the label will expire and you won't be able to
              return the products).
            </p>
            <p className="pb-8 text-lg text-gray-200 text-justify">
              Orders placed from outside the US are not eligible for returns;
              nevertheless, if you are dissatisfied with your purchase, please
              contact our customer care staff.Once the packaging is damaged, the
              following goods are not returnable or refundable: - Wear clothes -
              Change lubricants
            </p>
            <p className="pb-8 flex flex-col gap-2 text-lg text-gray-200 text-justify">
              <li> Wear clothes</li>
              <li>Change lubricants</li>
            </p>
            <p className="pb-8 text-lg text-gray-200 text-justify">
              Unless otherwise specified, items that are on sale or clearance
              are not returnable or refundable. Returns and refunds are not
              available for replacement products or anything that our customer
              care staff has discounted. If you are dissatisfied with your
              purchase, kindly contact our customer care staff.
            </p>
            <p className="pb-8 text-lg text-gray-200 text-justify">
              We never resell returned products on our website, however they
              could be offered for sale at a discount on refurbished websites.
              Every item you buy from our site is brand-new and unopened.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
