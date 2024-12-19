'use client';

import {useLocale} from 'next-intl';
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useTransition} from 'react';
import {setUserLocale} from '@/services/locale';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();


  const toggleLanguage = () => {
    const newLang = locale === 'en' ? 'es' : 'en';
    startTransition(() => setUserLocale(newLang));
  };

  const getOppositeLanguageLabel = () => {
    return locale === 'en' ? 'Español' : 'English';
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