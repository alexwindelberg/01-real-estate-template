import { useTranslation } from "react-i18next";

interface NavigationItemsProps {
  activeSection: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export const NavigationItems = ({ activeSection, onItemClick, className = "" }: NavigationItemsProps) => {
  const { t } = useTranslation();

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "properties", label: t("nav.properties") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
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