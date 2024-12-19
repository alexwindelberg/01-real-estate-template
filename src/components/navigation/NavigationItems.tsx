import {useTranslations} from 'next-intl';

interface NavigationItemsProps {
  activeSection: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export const NavigationItems = ({ activeSection, onItemClick, className = "" }: NavigationItemsProps) => {
  const t = useTranslations('Navigation');

  const navItems = [
    { id: "home", label: t("home") },
    { id: "properties", label: t("properties") },
    { id: "about", label: t("about") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === item.id ? "text-primary" : "text-muted-foreground"
          } ${className}`}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};