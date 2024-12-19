import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./ContactForm";
import { PersonalInfoFields } from "./fields/PersonalInfoFields";
import { AppointmentField } from "./fields/AppointmentField";
import { NotesField } from "./fields/NotesField";

interface ContactFormFieldsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const ContactFormFields = ({ register, errors }: ContactFormFieldsProps) => {
  return (
    <>
      <PersonalInfoFields register={register} errors={errors} />
      <AppointmentField register={register} errors={errors} />
      <NotesField register={register} errors={errors} />
    </>
  );
};