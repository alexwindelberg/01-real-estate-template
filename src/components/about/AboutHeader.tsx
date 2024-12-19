import {useTranslations} from 'next-intl';

export const AboutHeader = () => {
  const t = useTranslations('AboutSection');

  return (
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
        {t('title')}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t('subtitle')}
      </h2>
    </div>
  );
};