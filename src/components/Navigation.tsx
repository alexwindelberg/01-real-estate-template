import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./navigation/LanguageSwitcher";
import { NavigationItems } from "./navigation/NavigationItems";
import { MobileMenu } from "./navigation/MobileMenu";
import { getInitials } from "@/utils/nameUtils";
import { agentConfig } from "@/config/agent";

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4 shadow-sm" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-semibold">
              {getInitials(agentConfig.name)}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationItems
              activeSection={activeSection}
              onItemClick={scrollToSection}
            />
          </div>

          {/* Mobile Navigation */}
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />
        </div>
      </div>
    </nav>
  );
};