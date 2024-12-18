import { useTranslation } from "react-i18next";

export const AboutHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
        {t('about.title')}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t('about.subtitle')}
      </h2>
    </div>
  );
};