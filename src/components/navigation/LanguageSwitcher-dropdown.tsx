'use client'

import { useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

/**
 * TODO: Follow the guide - https://github.com/amannn/next-intl/tree/main/examples/example-app-router-without-i18n-routing
 * Kept'd to implement in the future but for the time it is currently not in use
 * @deprecated
 * @returns 
 */
export const LanguageSwitcher = () => {
  const t = useTranslations('Language');


  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50">
    //       <Languages className="h-5 w-5" />
    //       <span className="sr-only">{t('language')}</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => changeLanguage('en')}>
    //       {t('language.en')}
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => changeLanguage('es')}>
    //       {t('language.es')}
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div>Placeholder</div>
  );
};