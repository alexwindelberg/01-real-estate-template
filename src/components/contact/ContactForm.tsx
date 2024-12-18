import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContactFormFields } from "./ContactFormFields";

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  appointmentType: string;
  notes?: string;
};

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // First, create or get the contact
      const { data: contactData, error: contactError } = await supabase
        .from('contacts')
        .upsert(
          {
            name: data.fullName,
            email: data.email,
            phone_number: data.phone,
          },
          { onConflict: 'email' }
        )
        .select()
        .single();

      if (contactError) throw contactError;

      // Then, create the message
      const { error: messageError } = await supabase
        .from('contact_messages')
        .insert({
          contact_id: contactData.id,
          appointment_type: data.appointmentType,
          notes: data.notes,
        });

      if (messageError) throw messageError;

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.message"),
      });
      reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      
      // Handle duplicate email gracefully
      if (error.code === '23505') {
        toast({
          title: t("contact.form.duplicate.title"),
          description: t("contact.form.duplicate.message"),
        });
        reset();
        return;
      }

      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.message"),
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-background rounded-xl shadow-sm p-8"
    >
      <div className="space-y-6">
        <ContactFormFields register={register} errors={errors} />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
        </button>
      </div>
    </form>
  );
};