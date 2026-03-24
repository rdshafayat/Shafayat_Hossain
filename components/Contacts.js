"use client";
import Script from "next/script";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // ✅ FIXED

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#f5f0ea] pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-6 border-2 border-black p-6">
        <p className="text-xs tracking-[0.2em] text-gray-500 mb-6">
          LET&apos;S BUILD YOUR GROWTH ENGINE
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">
              Need a senior marketing lead with execution support?
            </h2>

            <p className="text-gray-700 mb-6">
              Tell us your growth targets, team setup, and channel challenges.
              We&apos;ll recommend the best engagement model.
            </p>

            <div className="border-2 border-black p-4 bg-[#f5f0ea]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/shafayat/15min"
                style={{ minWidth: "320px", height: "650px" }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="border-2 border-black p-5 bg-[#2f3545] text-white">
            <h3 className="text-2xl font-semibold mb-3">
              Get the CMO Field Notes
            </h3>

            <p className="text-sm text-gray-300 mb-5">
              Monthly insights on positioning, demand generation systems, and
              team operating cadence.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for newsletter"
                className="w-full p-3 mb-4 bg-[#3b4255] text-white border border-gray-500 placeholder-gray-400 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-[#9fc39a] text-black text-sm font-medium disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {/* ✅ CLEAN STATUS MESSAGES */}
            {status === "success" && (
              <p className="text-green-400 mt-3 text-sm">
                You're subscribed 🎉
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 mt-3 text-sm">
                Something went wrong
              </p>
            )}

            <p className="text-xs text-gray-400 mt-4">
              Avg. read time: 4 mins • No spam
            </p>
          </div>

        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}