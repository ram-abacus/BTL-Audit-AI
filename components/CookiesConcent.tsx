"use client"
import React, { useState } from 'react';
import { X, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(true);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true });
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    setPreferences({ analytics: false, marketing: false });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black shadow-2xl border-t-4 border-white">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Message */}
          <div className="flex items-center gap-3 flex-1">
            <Shield size={22} className="text-white flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">We use cookies to enhance your audit experience.</p>
              <p className="text-gray-400 text-xs">
                <Link href="privacy-policy" className="underline hover:text-white">Privacy Policy</Link>
                {' • '}
                <Link href="cookies-policy" className="underline hover:text-white">Cookie Policy</Link>
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-xs font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-all"
            >
              Accept
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}