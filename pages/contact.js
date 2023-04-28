import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container max-w-screen-xl p-4 py-12">
          <h2 className="border-b-2 border-violet-700 inline text-2xl">
            Contact us
          </h2>

          <div className="flex items-center flex-col gap-8">
            <div className="flex gap-3 flex-col">
              <h3 className="mt-10 text-2xl">Support When You Need It</h3>
              <hr className="bg-violet-600 w-12 h-1 self-center"></hr>
            </div>
            <p className="text-xl">
              Use the phone numbers below to access the help centre that best
              fits your need.
            </p>
            <div className="flex justify-between gap-6 font-bold">
              <span className="flex flex-col gap-2">
                <span>Customer support</span>
                <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                  {` 600-544-793 > `}
                </button>
              </span>
              <span className="flex flex-col gap-2">
                <span>International shipping</span>
                <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                  {`+971-4-381-5200 > `}
                </button>
              </span>
            </div>
          </div>

          <article className="mt-12">
            <div className="flex items-center flex-col gap-8">
              <div className="flex gap-3 flex-col">
                <h3 className="mt-10 text-2xl">Contact information</h3>
                <hr className="bg-violet-600 w-12 h-1 self-center"></hr>
              </div>

              <div className="flex gap-8 ">
                <Image
                  src="/contact-ups.webp"
                  alt=""
                  width={600}
                  height={600}
                />
                <div className="flex flex-col gap-6">
                  <div className="flex gap-2 flex-col list-none">
                    <h6 className="font-bold">
                      UAE Country Office & Customer Center
                    </h6>
                    <li>UPS Gulf LLC (Dubai Branch)</li>
                    <li>Al Moosa Tower 2, Floor 25</li>
                    <li>Sheikh Zayed Road</li>
                    <li>Dubai, P.O. Box 26026</li>
                    <li>United Arab Emirates</li>
                  </div>

                  <div className="flex gap-2 flex-col list-none">
                    <h6 className="font-bold">Email support</h6>
                    <li>
                      We'll respond to your request as quickly as possible.
                    </li>
                  </div>

                  <div>
                    <a
                      href="mailto:ayodeleaderibigbe2000@gmail.com"
                      className="bg-violet-500 text-white rounded-xl p-3 px-6"
                    >
                      Email us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
