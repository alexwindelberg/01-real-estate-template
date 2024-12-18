import { Mail, Phone, MapPin } from "lucide-react";
import { SocialLinks } from "./hero/SocialLinks";
import { useTranslation } from "react-i18next";
import { agentConfig } from "@/config/agent";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{agentConfig.name}</h3>
            <p className="text-muted-foreground">
              {t("footer.description")}
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.properties")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.contactInfo")}</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3" />
                <span>{agentConfig.phone}</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3" />
                <span>{agentConfig.email}</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{agentConfig.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.officeHours")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>{t("footer.weekdays")}</li>
              <li>{t("footer.saturday")}</li>
              <li>{t("footer.sunday")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {agentConfig.name}. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};