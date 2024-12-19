import { UseFormRegister, FieldErrors } from "react-hook-form";
import {useTranslations} from 'next-intl';
import { FormData } from "../ContactForm";

interface AppointmentFieldProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const AppointmentField = ({ register, errors }: AppointmentFieldProps) => {
  const t = useTranslations('ContactSection');

  return (
    <div>
      <label htmlFor="appointmentType" className="block text-sm font-medium mb-2">
        {t("form.type")} *
      </label>
      <select
        {...register("appointmentType", {
          required: t("form.errors.typeRequired"),
        })}
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="">{t("form.typeSelect")}</option>
        <option value="viewing">{t("form.typeViewing")}</option>
        <option value="consultation">{t("form.typeConsultation")}</option>
        <option value="buying">{t("form.typeBuying")}</option>
        <option value="selling">{t("form.typeSelling")}</option>
        <option value="management">{t("form.typeManagement")}</option>
      </select>
      {errors.appointmentType && (
        <p className="text-destructive text-sm mt-1">
          {errors.appointmentType.message}
        </p>
      )}
    </div>
  );
};