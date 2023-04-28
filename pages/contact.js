import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

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
                  600-544-793
                </button>
              </span>
              <span className="flex flex-col gap-2">
                <span>International shipping</span>
                <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                  +971-4-381-5200
                </button>
              </span>
            </div>
          </div>

          <article>
            <div className="flex items-center flex-col gap-8">
              <div className="flex gap-3 flex-col">
                <h3 className="mt-10 text-2xl">Contact information</h3>
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
                    600-544-793
                  </button>
                </span>
                <span className="flex flex-col gap-2">
                  <span>International shipping</span>
                  <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                    +971-4-381-5200
                  </button>
                </span>
              </div>
            </div>
          </article>
        </section>

        <div className="flex items-center flex-col gap-8">
          <div className="flex gap-3 flex-col">
            <h3 className="mt-10 text-2xl">Support When You Need It</h3>
            <hr className="bg-violet-600 w-12 h-1 self-center"></hr>
          </div>
          <p className="text-xl">
            Use the phone numbers below to access the help centre that best fits
            your need.
          </p>
          <div className="flex justify-between gap-6 font-bold">
            <span className="flex flex-col gap-2">
              <span>Customer support</span>
              <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                600-544-793
              </button>
            </span>
            <span className="flex flex-col gap-2">
              <span>International shipping</span>
              <button className="border-2 border-blue-500 text-blue-500 rounded-xl p-2">
                +971-4-381-5200
              </button>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
