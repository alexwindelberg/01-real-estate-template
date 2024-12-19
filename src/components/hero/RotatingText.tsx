import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl'

export const RotatingText = () => {
  const t = useTranslations('HeroSection');
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    t('service.buying'),
    t('service.selling'),
    t('service.viewings'),
    t('service.management'),
    t('service.consultations'),
  ];

  // Map services to their text sizes based on length
  const serviceConfig = services.map((text) => ({
    text,
    // If text is longer than 12 characters, use xl, otherwise 6xl
    textSize:
      text.length > 20 ? 'text-2xl lg:text-4xl' : 'text-4xl lg:text-6xl',
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="block min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4rem] relative overflow-hidden">
      <div
        className={`flex absolute max-w-[20ch] h-full items-center animate-rotateText`}
      >
        <div
          className={`text-primary font-semibold transition-all duration-200 ${serviceConfig[currentIndex].textSize}`}
        >
          {serviceConfig[currentIndex].text}
        </div>
      </div>
    </div>
  );
};
