import { UseFormRegister, FieldErrors } from "react-hook-form";
import {useTranslations} from 'next-intl';
import { FormData } from "../ContactForm";

interface PersonalInfoFieldsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const PersonalInfoFields = ({ register, errors }: PersonalInfoFieldsProps) => {
  const t = useTranslations('ContactSection');

  return (
    <>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
          {t("form.name")} *
        </label>
        <input
          {...register("fullName", { required: t("form.errors.nameRequired") })}
          type="text"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("form.namePlaceholder")}
        />
        {errors.fullName && (
          <p className="text-destructive text-sm mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("form.email")} *
        </label>
        <input
          {...register("email", {
            required: t("form.errors.emailRequired"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("form.errors.emailInvalid"),
            },
          })}
          type="email"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("form.emailPlaceholder")}
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {t("form.phone")} *
        </label>
        <input
          {...register("phone", { required: t("form.errors.phoneRequired") })}
          type="tel"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder={t("form.phonePlaceholder")}
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