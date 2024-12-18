'use client'

import { useEffect, useState } from "react";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Navigation } from "@/components/Navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const [activeSection, setActiveSection] = useState("home");

  console.log('This is the lang ', lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <Properties />
        <About />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
