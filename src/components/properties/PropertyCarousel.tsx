import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PropertyCard } from './PropertyCard';

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

interface PropertyCarouselProps {
  properties: Property[];
}

export const PropertyCarousel = ({ properties }: PropertyCarouselProps) => {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden lg:flex left-2 top-1/2 -translate-y-1/2 xl:-left-12" />
        <CarouselNext className="absolute hidden lg:flex right-2 top-1/2 -translate-y-1/2 xl:-right-12" />
      </Carousel>
    </div>
  );
};
