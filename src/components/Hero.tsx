import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { HeroTestimonial } from './hero/HeroTestimonial';
import { SocialLinks } from './hero/SocialLinks';
import { HeroImage } from './hero/HeroImage';
import { RotatingText } from './hero/RotatingText';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen md:pt-0 mt-16 pt-16 lg:mt-0 flex items-center justify-center section-fade-in"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />

      <div className="container py-6 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left flex flex-col gap-7 lg:gap-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t('hero.introText')} <br />
            <RotatingText />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {t('hero.description')}
          </p>

          {/* <HeroTestimonial /> */}

          <button
            onClick={() =>
              document
                .getElementById('properties')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center min-w-[200px] w-auto lg:w-[30%] justify-center px-6 py-4 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            {t('hero.explore')}
          </button>

          <SocialLinks />
        </div>

        <div className="w-full max-w-lg mx-auto md:max-w-none">
          <HeroImage />
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById('properties')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary" size={32} />
      </button>
    </section>
  );
};
