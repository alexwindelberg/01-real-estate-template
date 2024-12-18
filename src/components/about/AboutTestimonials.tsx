import { useTranslation } from "react-i18next";
import { TestimonialCarousel } from "../testimonials/TestimonialCarousel";

export const AboutTestimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: t('about.testimonials.role1'),
      content: t('about.testimonials.content1'),
      image: "/placeholder.svg",
      source: "https://example.com/review/1",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: t('about.testimonials.role2'),
      content: t('about.testimonials.content2'),
      image: "/placeholder.svg",
      source: "https://example.com/review/2",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: t('about.testimonials.role3'),
      content: t('about.testimonials.content3'),
      image: "/placeholder.svg",
      source: "https://example.com/review/3",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-center mb-8">
        {t('about.testimonials')}
      </h3>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};