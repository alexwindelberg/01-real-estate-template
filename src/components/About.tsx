import { useRef, useEffect } from "react";
import { AboutHeader } from "./about/AboutHeader";
import { AboutContent } from "./about/AboutContent";
import { AboutTestimonials } from "./about/AboutTestimonials";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <AboutHeader />
        <AboutContent />
        <AboutTestimonials />
      </div>
    </section>
  );
};