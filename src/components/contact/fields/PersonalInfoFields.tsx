import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormData } from "../ContactForm";

interface PersonalInfoFieldsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const PersonalInfoFields = ({ register, errors }: PersonalInfoFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
          {t("contact.form.name")} *
        </label>
        <input
          {...register("fullName", { required: t("contact.form.errors.nameRequired") })}
          type="text"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("contact.form.namePlaceholder")}
        />
        {errors.fullName && (
          <p className="text-destructive text-sm mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("contact.form.email")} *
        </label>
        <input
          {...register("email", {
            required: t("contact.form.errors.emailRequired"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("contact.form.errors.emailInvalid"),
            },
          })}
          type="email"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("contact.form.emailPlaceholder")}
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {t("contact.form.phone")} *
        </label>
        <input
          {...register("phone", { required: t("contact.form.errors.phoneRequired") })}
          type="tel"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("contact.form.phonePlaceholder")}
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>
    </>
  );
};