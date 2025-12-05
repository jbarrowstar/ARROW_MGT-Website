import React from "react";

export default function TermsPage() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-12 bg-gray-50 font-lato">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#024369] mb-6">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-600 mb-8">
          These terms and conditions outline the rules and regulations for the
          use of <span className="font-semibold">ARROW Engineering &amp; Management Pte Ltd's</span> Website,
          located at{" "}
          <a
            href="https://arrowengmgt.com/"
            className="text-blue-600 hover:underline"
          >
            https://arrowengmgt.com/
          </a>.
        </p>

        {/* Sections */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <p>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use ARROW Engineering &amp;
              Management Pte Ltd if you do not agree to take all of the terms
              and conditions stated on this page.
            </p>
            <p className="mt-3">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company's terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client's needs in respect of
              provision of the Company's stated services, in accordance with and
              subject to, prevailing law of Singapore.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing ARROW Engineering &amp;
              Management Pte Ltd, you agreed to use cookies in agreement with
              our Privacy Policy. Cookies enable functionality of certain areas
              to make it easier for visitors. Some affiliate/advertising
              partners may also use cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">License</h2>
            <p>
              Unless otherwise stated, ARROW Engineering &amp; Management Pte
              Ltd and/or its licensors own the intellectual property rights for
              all material on this website. All rights are reserved. You may
              access this for personal use subject to restrictions in these
              terms and conditions.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Republish material from our website</li>
              <li>Sell, rent or sub-license material</li>
              <li>Reproduce, duplicate or copy material</li>
              <li>Redistribute content</li>
            </ul>
            <p className="mt-2">
              Parts of this website allow users to post opinions and
              information. Comments reflect the views of the person posting and
              not the company. We reserve the right to monitor and remove
              inappropriate comments.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Hyperlinking to Our Content</h2>
            <p>
              Certain organizations such as government agencies, search engines,
              and news organizations may link to our Website without prior
              approval. Other organizations may request approval by contacting
              us directly. Approved organizations may hyperlink using our
              corporate name, URL, or appropriate descriptions. No use of our
              logo or artwork is allowed without a trademark license agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">iFrames</h2>
            <p>
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter the visual presentation or
              appearance of our Website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Content Liability</h2>
            <p>
              We shall not be held responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims arising on your Website. No link(s) should appear on any
              Website that may be interpreted as libelous, obscene or criminal,
              or which infringes or advocates the infringement of any third
              party rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Reservation of Rights</h2>
            <p>
              We reserve the right to request removal of all links or any
              particular link to our Website. We also reserve the right to amend
              these terms and conditions and linking policy at any time. By
              continuously linking to our Website, you agree to be bound by and
              follow these terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Removal of Links</h2>
            <p>
              If you find any link on our Website offensive, you may contact us
              at any time. We will consider requests to remove links but are not
              obligated to respond directly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Disclaimer</h2>
            <p>
              To the maximum extent permitted by law, we exclude all
              representations, warranties and conditions relating to our website
              and its use. Nothing in this disclaimer will limit or exclude
              liability for death or personal injury, fraud, or any liability
              not permitted under applicable law. As long as the website and
              information are provided free of charge, we will not be liable for
              any loss or damage of any nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
