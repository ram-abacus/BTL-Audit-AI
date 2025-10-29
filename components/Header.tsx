"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
                <div className="container flex items-center justify-between h-16">
                  <Link href="/">
                        <div className="block sm:flex  items-center gap-2">
                        <img
                        src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
                        alt="Basiq360 Logo"
                        className="h-8 w-auto"
                        />
                        <span className="font-semibold ms-3 sm:ms-0">BTL Audit AI</span>
                    </div>
                  </Link>
                  <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#how" className="hover:text-black/80">How it works</a>
                    <a href="#rtb" className="hover:text-black/80">Why trust us</a>
                    <a href="#features" className="hover:text-black/80">Features</a>
                    <a href="#faq" className="hover:text-black/80">FAQ</a>
                  </nav>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" className="rounded-2xl">Login</Button>
                    <Button className="rounded-2xl" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>Book a Demo</Button>
                  </div>
                </div>
              </header>
    )
}