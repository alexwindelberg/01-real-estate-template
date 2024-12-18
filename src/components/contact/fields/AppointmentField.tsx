import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormData } from "../ContactForm";

interface AppointmentFieldProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const AppointmentField = ({ register, errors }: AppointmentFieldProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <label htmlFor="appointmentType" className="block text-sm font-medium mb-2">
        {t("contact.form.type")} *
      </label>
      <select
        {...register("appointmentType", {
          required: t("contact.form.errors.typeRequired"),
        })}
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="">{t("contact.form.typeSelect")}</option>
        <option value="viewing">{t("contact.form.typeViewing")}</option>
        <option value="consultation">{t("contact.form.typeConsultation")}</option>
        <option value="buying">{t("contact.form.typeBuying")}</option>
        <option value="selling">{t("contact.form.typeSelling")}</option>
        <option value="management">{t("contact.form.typeManagement")}</option>
      </select>
      {errors.appointmentType && (
        <p className="text-destructive text-sm mt-1">
          {errors.appointmentType.message}
        </p>
      )}
    </div>
  );
};