const TermConditions = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-4">
        <div className="max-w-screen-m mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl tracking-tight font-bold">
              Terms &<span className="gradient-text ml-2">Conditions</span>
            </h3>
          </div>

          <div className="mt-10 text-justify">
            <div>
              <h2 className="text-lg font-semibold py-4">Use of the Website</h2>
              <p>
                You may use the Website only in compliance with these Terms and
                all applicable local, state, national, and international laws,
                rules, and regulations. We reserve the right to refuse service,
                terminate accounts, remove or edit content, or cancel orders in
                our sole discretion. You are responsible for all activities that
                occur under your account. You must not transmit any files, code,
                or requests in a destructive nature.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-lg font-semibold py-4">User Content</h2>
              <p>
                You are solely responsible for all information, data, text,
                software, music, sound, photographs, graphics, video, messages,
                tags, or other materials ("Content") that you upload, post, or
                otherwise transmit via the Website. You must not upload, post,
                or otherwise transmit any Content that
              </p>
              <li>
                is unlawful, harmful, threatening, abusive, harassing, tortious,
                defamatory, vulgar, obscene, libelous, invasive of another's
                privacy, hateful, or racially, ethnically, or otherwise
                objectionable;
              </li>
              <li>
                you do not have a right to transmit under any law or under
                contractual or fiduciary relationships;
              </li>
              <li>
                contains software viruses or any other computer code, files, or
                programs designed to interrupt, destroy, or limit the
                functionality of any computer software or hardware or
                telecommunications equipment;
              </li>
              <li>
                impersonates any person or entity or otherwise misrepresents
                your affiliation with a person or entity.
              </li>
            </div>
            <div>
              <h2 className="text-lg font-semibold py-4">
                Intellectual Property Rights
              </h2>
              <p>
                The Website and its entire contents, features, and functionality
                (including but not limited to all information, software, text,
                displays, images, video, and audio, and the design, selection,
                and arrangement thereof) are owned by MK, its licensors, or
                other providers of such material and are protected by United
                States and international copyright, trademark, patent, trade
                secret, and other intellectual property or proprietary rights
                laws.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-lg font-semibold py-4">Severability</h2>
              <p>
                If any provision of these Terms is held by a court of competent
                jurisdiction to be invalid, illegal, or unenforceable for any
                reason, such provision shall be eliminated or limited to the
                minimum extent such that the remaining provisions of the Terms
                will continue in full force and effect.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold py-4">Contact Us</h2>
              <p className="pb-8 text-lg text-gray-200 text-justify">
                If you have any questions about these Terms, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermConditions;
