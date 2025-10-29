"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Cookie, Settings, Globe, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function BTLAuditCookiePolicy() {
  const [expandedCookie, setExpandedCookie] = useState('essential');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4">
            <Cookie size={40} className="flex-shrink-0" />
            <div>
              <h1 className="text-5xl font-bold mb-2">Cookie Policy</h1>
              <p className="text-xl text-gray-300">BTL Audit - Understand Our Cookie Usage</p>
              <p className="text-gray-400 mt-2">Last updated: May 31, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#what-are" className="px-4 py-2 bg-white border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors text-sm font-semibold">
              What Are Cookies
            </a>
            <a href="#why-use" className="px-4 py-2 bg-white border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors text-sm font-semibold">
              Why We Use
            </a>
            <a href="#types" className="px-4 py-2 bg-white border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors text-sm font-semibold">
              Cookie Types
            </a>
            <a href="#control" className="px-4 py-2 bg-white border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors text-sm font-semibold">
              Your Control
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* What are Cookies */}
          <div id="what-are" className="scroll-mt-20">
            <div className="flex items-start space-x-4 mb-4">
              <Cookie size={28} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-black mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They allow websites to remember information about your visit, such as your login credentials, preferences, and browsing patterns. Cookies are a standard technology used across the internet and help improve your online experience.
                </p>
                
                <div className="mt-6 bg-gray-100 p-6 rounded-lg border-2 border-black">
                  <p className="font-semibold text-black mb-2">Key Facts About Cookies:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-black mr-3 font-bold">•</span> Cookies contain no viruses or malware</li>
                    <li className="flex items-start"><span className="text-black mr-3 font-bold">•</span> Cookies cannot execute code or access other files on your device</li>
                    <li className="flex items-start"><span className="text-black mr-3 font-bold">•</span> You have full control over cookie settings in your browser</li>
                    <li className="flex items-start"><span className="text-black mr-3 font-bold">•</span> Cookies expire after a set period or when you clear them</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why We Use */}
          <div id="why-use" className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <div className="flex items-start space-x-4 mb-4">
              <Zap size={28} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-black mb-4">Why Do We Use Cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use cookies to enhance your audit experience, improve our platform, and provide personalized services. Cookies help us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Authentication</p>
                    <p className="text-gray-700 text-sm">Maintain your login session and keep you securely logged in</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Personalization</p>
                    <p className="text-gray-700 text-sm">Remember your preferences and customized settings</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Analytics</p>
                    <p className="text-gray-700 text-sm">Understand how you use our audit platform and improve services</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Performance</p>
                    <p className="text-gray-700 text-sm">Optimize page load times and platform reliability</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Marketing</p>
                    <p className="text-gray-700 text-sm">Deliver personalized content and relevant audit information</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">Security</p>
                    <p className="text-gray-700 text-sm">Detect and prevent unauthorized access and fraud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div id="types" className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <h2 className="text-3xl font-bold text-black mb-8">Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              {/* Essential */}
              <div className="border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedCookie(expandedCookie === 'essential' ? '' : 'essential')}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                      <p className="font-bold text-black">Essential Cookies</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">Always active • Required for functionality</p>
                  </div>
                  <span className={`transform transition-transform ${expandedCookie === 'essential' ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
                {expandedCookie === 'essential' && (
                  <div className="px-6 py-4 bg-gray-100 border-t-2 border-black text-gray-700">
                    <p className="leading-relaxed">
                      Essential cookies are absolutely necessary for the website to function properly. They are used to maintain your session, authenticate your identity, and provide core functionality. These cookies cannot be disabled without affecting site operations.
                    </p>
                    <p className="text-sm mt-3 font-semibold text-black">Examples:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-700">
                      <li>Session ID for login persistence</li>
                      <li>CSRF protection tokens</li>
                      <li>Security and fraud prevention flags</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Analytics */}
              <div className="border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedCookie(expandedCookie === 'analytics' ? '' : 'analytics')}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                      <p className="font-bold text-black">Analytics Cookies</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">Optional • Help us understand usage patterns</p>
                  </div>
                  <span className={`transform transition-transform ${expandedCookie === 'analytics' ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
                {expandedCookie === 'analytics' && (
                  <div className="px-6 py-4 bg-gray-100 border-t-2 border-black text-gray-700">
                    <p className="leading-relaxed">
                      Analytics cookies help us measure how you use our audit platform. We collect information about pages visited, time spent, and interactions. This data helps us identify trends and improve our services. You can disable these cookies without affecting core functionality.
                    </p>
                    <p className="text-sm mt-3 font-semibold text-black">Examples:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-700">
                      <li>Google Analytics tracking cookies</li>
                      <li>Page view counters</li>
                      <li>User behavior and engagement metrics</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Marketing */}
              <div className="border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedCookie(expandedCookie === 'marketing' ? '' : 'marketing')}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <p className="font-bold text-black">Marketing Cookies</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">Optional • Enable personalized offers</p>
                  </div>
                  <span className={`transform transition-transform ${expandedCookie === 'marketing' ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
                {expandedCookie === 'marketing' && (
                  <div className="px-6 py-4 bg-gray-100 border-t-2 border-black text-gray-700">
                    <p className="leading-relaxed">
                      Marketing cookies allow us to deliver personalized content and audit-related information tailored to your interests. These cookies track your preferences and help us show you relevant information. You can disable these cookies at any time.
                    </p>
                    <p className="text-sm mt-3 font-semibold text-black">Examples:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-700">
                      <li>Ad targeting and retargeting pixels</li>
                      <li>Preference and interest tracking</li>
                      <li>Campaign performance monitoring</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Performance */}
              <div className="border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedCookie(expandedCookie === 'performance' ? '' : 'performance')}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="font-bold text-black">Performance Cookies</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">Optional • Optimize platform speed</p>
                  </div>
                  <span className={`transform transition-transform ${expandedCookie === 'performance' ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
                {expandedCookie === 'performance' && (
                  <div className="px-6 py-4 bg-gray-100 border-t-2 border-black text-gray-700">
                    <p className="leading-relaxed">
                      Performance cookies help us optimize platform speed and reliability. They collect data about page load times and error rates, allowing us to identify and fix performance issues. Disabling these cookies may affect platform responsiveness.
                    </p>
                    <p className="text-sm mt-3 font-semibold text-black">Examples:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-700">
                      <li>Page load performance metrics</li>
                      <li>Error tracking and monitoring</li>
                      <li>CDN performance optimization</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <h2 className="text-3xl font-bold text-black mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to our own cookies, we use third-party services that set their own cookies on our platform. These services help us provide better functionality and insights:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-black">
                <p className="font-bold text-black mb-2">Google Analytics</p>
                <p className="text-gray-700 text-sm mb-3">
                  We use Google Analytics to understand how you use our audit platform and measure engagement metrics.
                </p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black text-sm font-semibold hover:underline">
                  Google Analytics Privacy Policy →
                </a>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-black">
                <p className="font-bold text-black mb-2">Google Maps</p>
                <p className="text-gray-700 text-sm mb-3">
                  We use Google Maps for location-based services and geographic functionality on our platform.
                </p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black text-sm font-semibold hover:underline">
                  Google Maps Privacy Policy →
                </a>
              </div>
            </div>
          </div>

          {/* How to Control */}
          <div id="control" className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <div className="flex items-start space-x-4 mb-4">
              <Settings size={28} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-black mb-4">How to Control Your Cookie Preferences</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You have full control over cookie preferences on our platform:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-2 border-black">
                    <p className="font-semibold text-black">Accept All Cookies</p>
                    <p className="text-gray-700 text-sm mt-1">Accept all optional cookies to enable full features and personalization</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-black">
                    <p className="font-semibold text-black">Customize Preferences</p>
                    <p className="text-gray-700 text-sm mt-1">Choose which types of optional cookies to enable based on your preferences</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-black">
                    <p className="font-semibold text-black">Reject All (Optional)</p>
                    <p className="text-gray-700 text-sm mt-1">Disable all optional cookies - essential cookies remain active for core functionality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Controls */}
          <div className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <h2 className="text-3xl font-bold text-black mb-4">Managing Cookies in Your Browser</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most modern web browsers allow you to control cookies directly through their settings. Here's what you can typically do:
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg space-y-3 border-2 border-black">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold">1</span>
                <p className="text-gray-700"><span className="font-semibold">Access Browser Settings:</span> Open your browser preferences/settings menu</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold">2</span>
                <p className="text-gray-700"><span className="font-semibold">Find Privacy/Security Section:</span> Look for Privacy, Security, or Cookies settings</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold">3</span>
                <p className="text-gray-700"><span className="font-semibold">Choose Your Preference:</span> Allow all, block all, or select specific sites</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold">4</span>
                <p className="text-gray-700"><span className="font-semibold">Delete Existing Cookies:</span> Clear cookies from your browser at any time</p>
              </div>
            </div>
          </div>

          {/* Do Not Track */}
          <div className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <h2 className="text-3xl font-bold text-black mb-4">Do Not Track (DNT)</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a Do-Not-Track feature that sends a signal requesting that websites not track your online activity. Currently, there is no industry standard for recognizing and honoring DNT signals. At this time, we do not alter our data collection practices based on DNT browser signals. However, most browsers allow you to clear cookies and restrict cookie usage regardless of DNT status. If a uniform DNT standard is established, we will update this policy to reflect our compliance.
            </p>
          </div>

          {/* Updates */}
          <div className="scroll-mt-20 pt-8 border-t-2 border-gray-300">
            <h2 className="text-3xl font-bold text-black mb-4">Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this cookie policy from time to time to reflect changes in cookie technology, our practices, or applicable laws. We will notify you of any material changes by updating the "Last updated" date at the top of this page or by sending you a direct notification. We encourage you to review this policy regularly to stay informed about how we use cookies.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-black text-white rounded-2xl p-8 border-4 border-gray-800 mt-12">
            <h2 className="text-2xl font-bold mb-6">Questions About Our Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We're transparent about our cookie practices and happy to answer any questions. If you need more information or have concerns about specific cookies, please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:connect@basiq360.com" className="flex items-start space-x-4 p-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
                <Mail size={28} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm hover:underline">connect@basiq360.com</p>
                </div>
              </a>
              
              <a href="tel:+919350059390" className="flex items-start space-x-4 p-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
                <Phone size={28} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone (India)</p>
                  <p className="text-sm hover:underline">+91 935 005 9390</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-4 p-4 bg-white text-black rounded-lg">
                <MapPin size={28} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm">Faridabad, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}