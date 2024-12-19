import { useState } from 'react';
import { Quote } from 'lucide-react';
import {useTranslations} from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  source?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({
  testimonials,
}: TestimonialCarouselProps) => {
  const t = useTranslations('AboutSection');
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <div className="max-w-4xl mx-auto relative">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-full">
              <div className="bg-secondary/50 rounded-2xl p-8 relative overflow-hidden">
                {/* Decorative circle backgrounds */}
                <div className="absolute top-0 right-0 w-1/4 h-full">
                  <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-1/2 translate-y-[-25%] aspect-square" />
                </div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full">
                  <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-[-50%] translate-y-[25%] aspect-square" />
                </div>
                
                <Quote className="text-primary/40 w-12 h-12 absolute top-8 right-8 z-10" />
                <div className="flex items-center mb-6 relative z-10">
                  <div className="relative before:content-[''] before:absolute before:-inset-2 before:rounded-full before:border-[2px] before:border-primary">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic relative z-10">
                  {testimonial.content}
                </p>

                {testimonial.source && (
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0 relative z-10"
                    asChild
                  >
                    <a
                      href={testimonial.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('testimonials.readMore')}
                    </a>
                  </Button>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 lg:-left-12" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 lg:-right-12" />
      </Carousel>
    </div>
  );
};