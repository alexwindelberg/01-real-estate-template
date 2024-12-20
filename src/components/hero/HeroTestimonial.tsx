import {useTranslations} from 'next-intl';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeroTestimonial = () => {
  const t = useTranslations('HeroSection');

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-md">
      <div className="flex items-start gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg" alt="Client" />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground italic">
            {t('testimonial')}
          </p>
          <p className="text-sm font-medium mt-2">
            - {t('testimonial.author')}
          </p>
        </div>
      </div>
    </div>
  );
};