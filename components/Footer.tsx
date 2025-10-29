"use client"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-10 border-t">
        <div className="container grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <Link href="/">
                        <div className="block sm:flex items-center gap-2">
                        <img
                        src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
                        alt="Basiq360 Logo"
                        className="h-8 w-auto"
                        />
                        <span className="font-semibold ms-3 sm:ms-0">BTL Audit AI</span>
                    </div>
                  </Link>
            <p className="text-gray-600 mt-2">AI compliance for billboards & retail signage across India.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#rtb">Trust & Security</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li>Contact: hello@btlaudit.ai</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get started</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#cta">Book a Demo</a></li>
              <li><a href="#how">See How It Works</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} BTL Audit AI. All rights reserved.</div>
      </footer>
    )
}



