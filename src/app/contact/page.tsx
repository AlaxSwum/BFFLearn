'use client';

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppointmentScheduler } from "@/components/appointment-scheduler"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 bg-emerald-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our LMS platform? We&apos;re here to help you find the right solution for your educational
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          {/* Appointment Scheduling Section */}
          <div className="mb-10 max-w-3xl mx-auto">
            <AppointmentScheduler />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Contact information */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                  <p className="text-muted-foreground">
                    We are committed to processing the information in order to contact you and talk about your project.
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@edulearn.com" className="hover:text-emerald-600">
                          info@edulearn.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <address className="not-italic text-muted-foreground">
                        4074 Ebert Summit Suite 375
                        <br />
                        Lake Leonardchester
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <a href="tel:+441234567890" className="hover:text-emerald-600">
                          +44 123 654 7890
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name*
                    </label>
                    <Input id="first-name" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name*
                    </label>
                    <Input id="last-name" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email*
                  </label>
                  <Input id="email" type="email" placeholder="Email Address" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject*
                  </label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales Question</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?*
                  </label>
                  <Textarea id="message" placeholder="Message" rows={5} />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-12 py-6 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our LMS platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How can I request a demo of your LMS platform?",
                answer:
                  "You can request a demo by filling out the contact form above or by emailing us directly at demo@edulearn.com. Our team will schedule a personalized demonstration based on your specific needs.",
              },
              {
                question: "What kind of support do you offer to customers?",
                answer:
                  "We provide 24/7 technical support, comprehensive documentation, video tutorials, and regular webinars. Our dedicated customer success team also offers personalized onboarding and training.",
              },
              {
                question: "Is your LMS platform suitable for K-12 education?",
                answer:
                  "Yes, our platform is designed to be flexible and can be customized for K-12 education, higher education, corporate training, and more. We offer specific features tailored to each educational level.",
              },
              {
                question: "Can I integrate your LMS with other systems we use?",
                answer:
                  "Our LMS platform offers robust API integration capabilities and pre-built connectors for popular education tools, student information systems, and communication platforms.",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faqs" className="text-emerald-600 hover:text-emerald-700 font-medium">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Our Global Offices"
                width={600}
                height={400}
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Global Offices</h2>
              <p className="text-muted-foreground">
                With offices around the world, we&apos;re able to provide localized support and services to our global
                customer base.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { city: "New York", country: "United States" },
                  { city: "London", country: "United Kingdom" },
                  { city: "Singapore", country: "Singapore" },
                  { city: "Sydney", country: "Australia" },
                ].map((office, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{office.city}</h3>
                      <p className="text-muted-foreground">{office.country}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline">View All Locations</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 