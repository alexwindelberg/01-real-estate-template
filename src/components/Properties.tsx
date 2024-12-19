import { useRef, useEffect } from "react";
import {useTranslations} from 'next-intl';
import { PropertyCarousel } from "./properties/PropertyCarousel";

const getProperties = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("property1.title"),
    type: t("property1.type"),
    price: "$450,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: t("property2.title"),
    type: t("property2.type"),
    price: "$1,200,000",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: t("property3.title"),
    type: t("property3.type"),
    price: "$650,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "/placeholder.svg",
  },
];

export const Properties = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('PropertiesSection');

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

  const properties = getProperties(t);

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="py-24 bg-secondary/50 section-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            {t('subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <PropertyCarousel properties={properties} />
      </div>
    </section>
  );
};