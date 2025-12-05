import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-12 bg-gray-50 font-lato">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#024369] mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">ARROW Engineering &amp; Management Pte Ltd</span>, accessible from{" "}
          <a
            href="https://arrowengmgt.com/"
            className="text-blue-600 hover:underline"
          >
            https://arrowengmgt.com/
          </a>, one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is collected and recorded by ARROW Engineering &amp; Management Pte Ltd and how we use it.
        </p>

        {/* Sections */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className="mt-3">
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ARROW Engineering &amp; Management Pte Ltd. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className="mt-2">
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p className="mt-2">
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">How We Use Your Information</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and promotions</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Log Files</h2>
            <p>
              ARROW Engineering &amp; Management Pte Ltd follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and it is part of hosting services' analytics. The information collected by log files includes IP addresses, browser type, ISP, date/time stamp, referring/exit pages, and clicks. These are not linked to personally identifiable information and are used to analyze trends, administer the site, track user movement, and gather demographic data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Cookies and Web Beacons</h2>
            <p>
              Like any other website, we use cookies to store information including visitors' preferences and the pages visited. This information is used to optimize user experience by customizing content based on browser type and other information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Advertising Partners Privacy Policies</h2>
            <p>
              Third-party ad servers or networks use technologies like cookies, JavaScript, or Web Beacons in their advertisements and links that appear on our site. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content you see. ARROW Engineering &amp; Management Pte Ltd has no access to or control over these cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Third Party Privacy Policies</h2>
            <p>
              Our Privacy Policy does not apply to other advertisers or websites. Please consult the respective Privacy Policies of third-party ad servers for more detailed information, including how to opt out of certain options. You can disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">CCPA Privacy Rights</h2>
            <p>
              California consumers have the right to request disclosure, deletion, or opt out of the sale of personal data. If you make a request, we will respond within one month. Please contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">GDPR Data Protection Rights</h2>
            <p>
              Every user is entitled to rights including access, rectification, erasure, restriction, objection, and data portability. If you make a request, we will respond within one month. Please contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Children's Information</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you believe your child provided such information, please contact us immediately and we will remove it promptly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#024369] mb-2">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Changes will be posted on this page and are effective immediately once posted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
