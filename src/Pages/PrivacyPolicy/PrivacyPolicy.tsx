const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-4">
        <div className="max-w-screen-m mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl tracking-tight font-bold">
              Privacy
              <span className="gradient-text ml-2">Policy</span>
            </h3>
          </div>

          <div className="mt-10 text-justify">
            <div>
              <h2 className="text-lg font-semibold py-4">Collected Information</h2>
              <p>
                Only the information required to complete the registration
                process on our website or while completing the registration form
                on the site is collected by us. The data that we acquired was
                willingly provided to us by our clients. When a consumer
                registers for an account on our website, we gather their
                personal information.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-lg font-semibold py-4">Personal Identification Details</h2>
              <p>
                In order to process your product order, update your status for
                online shopping on our site, comply with legal requirements,
                personalize your profile information, and notify our customers
                of updates, changes, promotions, and events, we need your
                personal identification information.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold py-4">Confidentiality</h2>
              <p>
                We take great care to protect the privacy of your personal
                information, including bank account numbers and credit card
                data. We will never provide any third party access to any of
                your personal information. Our websites use the proper security
                measures to ensure that all client information is always kept
                secure.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-lg font-semibold py-4">Changes to our Privacy Policy</h2>
              <p>
                Without providing customers with prior notice, MY retains the
                right to make any modifications or amendments to the terms of
                the Privacy Policy. Please keep an eye on our website's Privacy
                Policy page.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold py-4">Security</h2>
              <p className="pb-8 text-lg text-gray-200 text-justify">
                The required security measures are in place on our corporate
                website to guard against hackers, unauthorized disclosure, and
                third parties getting access to confidential customer
                information. But keep in mind that there is no 100% assurance of
                safety and security for any information sent via the Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
