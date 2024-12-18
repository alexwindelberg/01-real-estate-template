import { useTranslation } from "react-i18next";

export const ContactHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
        {t("contact.subtitle")}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t("contact.title")}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t("contact.description")}
      </p>
    </div>
  );
};