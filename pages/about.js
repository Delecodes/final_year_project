import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container max-w-screen-xl p-4 py-12">
          <h3 className="border-b-2 border-violet-700 inline text-2xl">
            About us
          </h3>
        </section>
      </main>
    </>
  );
}
