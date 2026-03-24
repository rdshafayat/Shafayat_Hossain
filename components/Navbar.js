"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ["home", "pricing", "contact"];
      const scrollPosition = window.scrollY + 120;

      let currentSection = "home";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const linkClass = (id) =>
    `px-4 py-1 border-2 border-black ${
      active === id ? "bg-yellow-400" : ""
    }`;

  return (
    <nav className="border-2 border-black p-4 flex justify-between items-center bg-[#f5f0ea] sticky top-0 z-50">
      <Link href="/" className="font-bold text-xl">
        Shafayat Hossain
      </Link>

      <div className="flex gap-4">
        <a href="#home" className={linkClass("home")}>
          Home
        </a>

        <a href="#pricing" className={linkClass("pricing")}>
          Pricing
        </a>

        <a href="#contact" className={linkClass("contact")}>
          Book a Call
        </a>
      </div>
    </nav>
  );
}