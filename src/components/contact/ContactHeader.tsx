import {useTranslations} from 'next-intl';

export const ContactHeader = () => {
  const t = useTranslations('ContactSection');

  return (
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
        {t("subtitle")}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t("title")}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t("description")}
      </p>
    </div>
  );
};