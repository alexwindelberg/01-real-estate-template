import {useTranslations} from 'next-intl';
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  //const { i18n } = useTranslation();

  const toggleLanguage = () => {
    // const newLang = i18n.language === 'en' ? 'es' : 'en';
    // i18n.changeLanguage(newLang);
    console.log('Needs to be done');
  };

  const getOppositeLanguageLabel = () => {
    //return i18n.language === 'en' ? 'Español' : 'English';
    return 'placeholder';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-primary hover:text-primary/80"
    >
      <Languages className="h-4 w-4 mr-2" />
      {getOppositeLanguageLabel()}
    </Button>
  );
};