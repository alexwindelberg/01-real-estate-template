import { Menu, X } from "lucide-react";
import { NavigationItems } from "./NavigationItems";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileMenu = ({ isOpen, setIsOpen, activeSection, onNavigate }: MobileMenuProps) => {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <NavigationItems
              activeSection={activeSection}
              onItemClick={(id) => {
                onNavigate(id);
                setIsOpen(false);
              }}
              className="block w-full text-left py-3"
            />
          </div>
        </div>
      )}
    </>
  );
};