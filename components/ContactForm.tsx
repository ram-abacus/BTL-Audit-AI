"use client";

import { useEffect } from "react";

export default function BasiqForm() {
  useEffect(() => {
    // Load Mautic form JS for submission handling
    if (!document.getElementById("mautic-form-script")) {
      const script = document.createElement("script");
      script.id = "mautic-form-script";
      script.src = "https://mautic.abacusdesk.co.in/media/js/mautic-form.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl text-black font-bold mb-6">Get the deck & pricing</h3>
      
      {/* Mautic error and success messages */}
      <div className="mauticform-error text-red-600 mb-4" id="mauticform_btlauditaibasiq360_error"></div>
      <div className="mauticform-message text-green-600 mb-4" id="mauticform_btlauditaibasiq360_message"></div>

      <form
        className="space-y-4"
        autoComplete="false"
        role="form"
        method="post"
        action="https://mautic.abacusdesk.co.in/form/submit?formId=16"
        id="mauticform_btlauditaibasiq360"
        data-mautic-form="btlauditaibasiq360"
        encType="multipart/form-data"
      >
        <div className="mauticform-innerform">
          <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            
            {/* Full Name Field */}
            <div 
              id="mauticform_btlauditaibasiq360_f_name"
              className="mauticform-row mauticform-text mauticform-field-1 mauticform-required mb-4"
              data-validate="f_name"
              data-validation-type="text"
            >
              <input
                type="text"
                name="mauticform[f_name]"
                id="mauticform_input_btlauditaibasiq360_f_name"
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mauticform-input bg-gray-50"
                placeholder="Full Name"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1 block" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Phone Field */}
            <div
              id="mauticform_btlauditaibasiq360_phone"
              className="mauticform-row mauticform-tel mauticform-field-2 mauticform-required mb-4"
              data-validate="phone"
              data-validation-type="tel"
            >
              <input
                type="tel"
                name="mauticform[phone]"
                id="mauticform_input_btlauditaibasiq360_phone"
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mauticform-input bg-gray-50"
                placeholder="Phone" minLength={10} maxLength={10}
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1 block" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Email Field */}
            <div
              id="mauticform_btlauditaibasiq360_email"
              className="mauticform-row mauticform-email mauticform-field-3 mauticform-required mb-4"
              data-validate="email"
              data-validation-type="email"
            >
              <input
                type="email"
                name="mauticform[email]"
                id="mauticform_input_btlauditaibasiq360_email"
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mauticform-input bg-gray-50"
                placeholder="Work Email"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1 block" style={{ display: 'none' }}>This field is required</span>
            </div>

            {/* Company Field */}
            <div
              id="mauticform_btlauditaibasiq360_company"
              className="mauticform-row mauticform-text mauticform-field-4 mb-4"
            >
              <input
                type="text"
                name="mauticform[company]"
                id="mauticform_input_btlauditaibasiq360_company"
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mauticform-input bg-gray-50"
                placeholder="Company Name"
              />
              <span className="mauticform-errormsg text-red-500 text-sm mt-1 block" style={{ display: 'none' }}></span>
            </div>

            {/* Submit Button */}
            <div
              id="mauticform_btlauditaibasiq360_submit"
              className="mauticform-row mauticform-button-wrapper mauticform-field-5"
            >
              <button
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 mauticform-button"
                name="mauticform[submit]"
                value="1"
                id="mauticform_input_btlauditaibasiq360_submit"
                type="submit"
              >
                Submit
              </button>
            </div>

          </div>
        </div>

        {/* Hidden Fields */}
        <input
          type="hidden"
          name="mauticform[formId]"
          id="mauticform_btlauditaibasiq360_id"
          value="16"
        />
        <input
          type="hidden"
          name="mauticform[return]"
          id="mauticform_btlauditaibasiq360_return"
          value=""
        />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_btlauditaibasiq360_name"
          value="btlauditaibasiq360"
        />

        {/* Footer Text */}
        <p className="text-xs text-gray-500 mt-4">
          Includes security controls, implementation plan, and ROI model.
        </p>
      </form>
    </div>
  );
}