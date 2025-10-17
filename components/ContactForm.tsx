"use client";

import { useEffect } from "react";

export default function BasiqForm() {
  useEffect(() => {
    const scriptId = "hubspot-embed-script";

    function loadHubspotForm() {
      if (!(window as any).hbspt) return;

      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "242830238",
        formId: "040a98bd-7b7c-46a3-9ba0-db9f344b724c",
        target: "#hubspot-form-container",
      });
    }

    // If script already exists, just load the form
    if (document.getElementById(scriptId)) {
      loadHubspotForm();
      return;
    }

    // Otherwise, inject HubSpot script
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://js-na2.hsforms.net/forms/embed/v2.js"; // ✅ correct embed script
    script.async = true;
    script.defer = true;
    script.onload = loadHubspotForm; // ✅ wait for load
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg">
      {/* <h3 className="text-2xl text-black font-bold mb-6">Get the deck & pricing</h3> */}
      <div id="hubspot-form-container"></div>
    </div>
  );
}
