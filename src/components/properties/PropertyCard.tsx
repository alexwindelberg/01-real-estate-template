import { BedDouble, Bath, Square } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
import {useTranslations} from 'next-intl';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    type: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
  };
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const t = useTranslations('PropertiesSection');

  return (
    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
      <div className="property-card bg-background rounded-xl overflow-hidden shadow-sm h-full">
        <div className="aspect-video relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full">
            {property.type}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-2xl font-bold text-primary mb-4">
            {property.price}
          </p>
          <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 mr-2" />
              <span>{property.beds} {t('beds')}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2" />
              <span>{property.baths} {t('baths')}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-2" />
              <span>{property.sqft} {t('sqft')}</span>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};