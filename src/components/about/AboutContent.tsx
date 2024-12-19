import {useTranslations} from 'next-intl';
import { SocialLinks } from "../hero/SocialLinks";

export const AboutContent = () => {
  const t = useTranslations('AboutSection');

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          {t('description1')}
        </p>
        <p className="text-lg text-muted-foreground">
          {t('description2')}
        </p>
        <p className="text-lg text-muted-foreground">
          {t('description3')}
        </p>
        <div className="pt-4">
          <h4 className="text-lg font-semibold mb-4">{t('connect')}</h4>
          <SocialLinks />
        </div>
      </div>
      
      <div className="relative">
        <img
          src="/placeholder.svg"
          alt={t('agentImageAlt')}
          className="w-full h-[600px] object-cover rounded-lg shadow-xl"
        />
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
      </div>
    </div>
  );
};