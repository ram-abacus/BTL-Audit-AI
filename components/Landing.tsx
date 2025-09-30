'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Camera, BarChart3, MapPin, Upload, Sparkles, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import BasiqForm from "./ContactForm";

export default function Landing() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
              alt="Basiq360 Logo"
              className="h-8 w-auto"
            />
            <span className="font-semibold">BTL Audit AI</span>
          </div>
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-extrabold leading-tight">
              AI‑Powered Billboard & Signage Compliance — Built for India‑scale brands
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600">
              Upload photos from field teams. Our multimodal AI verifies brand guidelines, extracts EXIF (time, GPS, device), checks placement & creatives, and turns audits into action—across thousands of locations, in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl">Request Enterprise Demo</Button>
              <Button size="lg" variant="outline" className="rounded-2xl">Try with Sample Images</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Data residency options in India</div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4"/> CFO‑ready ROI reporting</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Works with seasonal campaigns</div>
            </div>
          </div>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle>See a 60‑second Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {label: "Upload", Icon: Upload},
                    {label: "Auto‑EXIF", Icon: Camera},
                    {label: "Insights", Icon: BarChart3},
                  ].map(({label, Icon}, i) => (
                    <div key={i} className="p-4 border rounded-2xl grid place-items-center text-center">
                      <Icon className="h-6 w-6 mb-2"/>
                      <div className="text-xs uppercase tracking-wide text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border rounded-2xl">
                  <div className="text-sm font-medium mb-2">Example Output</div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> GPS matches assigned site (<span className="font-mono">19.0760, 72.8777</span>)</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Shot within campaign window (1–31 Aug)</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Creative version v3 detected, QR visible, logo safe‑zone OK</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Obstruction risk 12% (tree/pole), glare risk low</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social proof / logos placeholder */}
      <section className="py-8 border-t">
        <div className="container">
          <p className="text-center text-sm text-gray-500">Trusted by out‑of‑home teams and retail brands across India</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold">From photo to proof — in three steps</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Capture",
                desc: "Field teams click photos in-app or upload from gallery. We read EXIF for time, GPS, device, and lens details.",
                icon: Camera,
              },
              {
                title: "Verify",
                desc: "Vision AI checks logo clear‑space, creative version, size ratio, obstruction/glare, and compares to site plan.",
                icon: Sparkles,
              },
              {
                title: "Report",
                desc: "Compliance scorecards and heatmaps by city, vendor, and campaign. Export CSV/PDF or push to your BI.",
                icon: BarChart3,
              },
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><s.icon className="h-5 w-5"/> {s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold">Purpose‑built for Indian billboard & retail signage ops</h2>
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <Feature
              icon={<MapPin className="h-5 w-5"/>}
              title="Site & GPS matching"
              points={["Compare EXIF GPS to approved site coordinates","Auto‑flag distance deltas (e.g., >100m)","Cluster view for city‑wide audits"]}
            />
            <Feature
              icon={<Camera className="h-5 w-5"/>}
              title="Creative & placement checks"
              points={["Detect creative version / promo code","Logo safe‑zone and aspect ratio","Obstruction & glare probability"]}
            />
            <Feature
              icon={<Shield className="h-5 w-5"/>}
              title="Enterprise‑grade control"
              points={["Siloed tenants for each brand & agency","Role‑based access for HQ, regions, vendors","Optional India data residency"]}
            />
            <Feature
              icon={<BarChart3 className="h-5 w-5"/>}
              title="Actionable analytics"
              points={["Compliance score by brand/city/vendor","Cost leakage estimates for missed installs","Exports, APIs, and Slack/Teams alerts"]}
            />
            <Feature
              icon={<IndianRupee className="h-5 w-5"/>}
              title="ROI that finance loves"
              points={["Quantify make‑good claims quickly","Reduce site revisits & agency disputes","Prove campaign execution to leadership"]}
            />
            <Feature
              icon={<Sparkles className="h-5 w-5"/>}
              title="Fast start"
              points={["Drop‑in web uploader & mobile web","CSV import of site lists & vendors","Sandbox with sample audits"]}
            />
          </div>
        </div>
      </section>

      {/* RTB */}
      <section id="rtb" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold">Why brands trust our audits</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { metric: "98.7%", label: "EXIF read success across common phones" },
              { metric: "<60s", label: "Average time from upload to insights" },
              { metric: "35%", label: "Fewer site revisits after 1st month" },
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-extrabold">{item.metric}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">{item.label}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/> Security & Governance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <Bullet>Tenant isolation, SSO/SAML, audit logs</Bullet>
                <Bullet>PII minimisation and signed URL uploads</Bullet>
                <Bullet>Optional India data residency and VPC peering</Bullet>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Accuracy & Explainability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <Bullet>Model ensembles for logo/creative/versioning</Bullet>
                <Bullet>EXIF + vision cross‑checks with human‑in‑the‑loop</Bullet>
                <Bullet>Transparent reason codes in every scorecard</Bullet>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-black text-white">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-extrabold">Ready to see your real compliance score?</h3>
            <p className="mt-3 text-gray-300">Book a guided walkthrough or upload sample audits. We’ll map results by city, vendor, and campaign in minutes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl !text-black bg-white hover:bg-gray-100 hover:text-black">Book a Demo</Button>
              <Button size="lg" variant="secondary" className="rounded-2xl">Upload Sample Audit</Button>
            </div>
          </div>
          <BasiqForm />
          {/* <Card className="bg-white text-gray-900 rounded-2xl">
            <CardHeader>
              <CardTitle>Get the deck & pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-2xl"/>
                <Button className="rounded-2xl">Send</Button>
              </div>
              <p className="mt-3 text-sm text-gray-600">Includes security overview, implementation plan, and ROI model.</p>
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Faq q="Do you support Indian languages?" a="Yes. Tags, site names, and comments can include Hindi and regional scripts; AI labels remain consistent in English."/>
            <Faq q="How do you handle fraud or recycled photos?" a="We combine EXIF, GPS drift analysis, device fingerprints, and content similarity to flag suspicious uploads."/>
            <Faq q="Can we bring our own storage or BI?" a="Yes. We support S3/GCS/Azure buckets, and exports/streams to your BI tools via APIs or webhooks."/>
            <Faq q="What about privacy?" a="We avoid storing faces where not needed, blur by default for people, and retain only required metadata as per policy."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="container grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">BTL Audit AI</div>
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
    </div>
  );
}

function Feature({ icon, title, points }: { icon: React.ReactNode, title: string, points: string[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{icon} {title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-gray-600 text-sm">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> {p}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2 items-start"><Check className="h-4 w-4 mt-1"/> <span>{children}</span></div>;
}

function Faq({ q, a }: { q: string, a: string }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{q}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600 text-sm">{a}</CardContent>
    </Card>
  );
}
