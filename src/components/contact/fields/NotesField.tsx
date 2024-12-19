import { UseFormRegister, FieldErrors } from "react-hook-form";
import {useTranslations} from 'next-intl';
import { FormData } from "../ContactForm";

interface NotesFieldProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const NotesField = ({ register, errors }: NotesFieldProps) => {
  const t = useTranslations('ContactSection');

  return (
    <div>
      <label htmlFor="notes" className="block text-sm font-medium mb-2">
        {t("form.notes")}
      </label>
      <textarea
        {...register("notes", {
          maxLength: {
            value: 65,
            message: t("form.errors.notesTooLong"),
          },
          pattern: {
            value: /^[a-zA-Z0-9\s.,!?-]*$/,
            message: t("form.errors.notesInvalid"),
          },
        })}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
        placeholder={t("form.notesPlaceholder")}
      />
      {errors.notes && (
        <p className="text-destructive text-sm mt-1">
          {errors.notes.message}
        </p>
      )}
    </div>
  );
};