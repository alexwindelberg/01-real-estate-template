import {useTranslations} from 'next-intl';
import { TestimonialCarousel } from "../testimonials/TestimonialCarousel";

export const AboutTestimonials = () => {
  const t = useTranslations('AboutSection');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: t('testimonials.role1'),
      content: t('testimonials.content1'),
      image: "/placeholder.svg",
      source: "https://example.com/review/1",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: t('testimonials.role2'),
      content: t('testimonials.content2'),
      image: "/placeholder.svg",
      source: "https://example.com/review/2",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: t('testimonials.role3'),
      content: t('testimonials.content3'),
      image: "/placeholder.svg",
      source: "https://example.com/review/3",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-center mb-8">
        {t('testimonials_title')}
      </h3>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};