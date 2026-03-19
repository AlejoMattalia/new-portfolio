import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Contact = () => {
  const { t } = useCustomTranslation();

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contact_section.name") + " is required"),
      email: Yup.string()
        .email("Invalid email")
        .required(t("contact_section.email") + " is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must contain only numbers")
        .min(6, "Phone too short")
        .max(15, "Phone too long")
        .required(t("contact_section.phone") + " is required"),
      message: Yup.string().required(t("contact_section.message") + " is required"),
    }),
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        toast.success("Message sent successfully");
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Error sending message");
      }
    },
  });

  return (
    <section
      className="w-full max-w-[1200px] mx-auto z-20 relative mt-32 mb-32 px-6 md:px-12 flex flex-col items-center justify-center"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 w-full max-w-[600px] mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">{t("contact_section.title")}</h2>
        <p className="text-muted mt-4 transition-colors">{t("contact_section.subtitle")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[600px] bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
      >
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder={t("contact_section.name")}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-white dark:bg-zinc-900/50 text-foreground placeholder-muted border rounded-xl px-5 py-4 focus:outline-none transition-all ${errors.name && touched.name
                ? "border-red-500/50 focus:border-red-500"
                : "border-border focus:border-foreground"
                }`}
            />
            {errors.name && touched.name && (
              <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="email"
                placeholder={t("contact_section.email")}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-white dark:bg-zinc-900/50 text-foreground placeholder-muted border rounded-xl px-5 py-4 focus:outline-none transition-all ${errors.email && touched.email
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-border focus:border-foreground"
                  }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                placeholder={t("contact_section.phone")}
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-white dark:bg-zinc-900/50 text-foreground placeholder-muted border rounded-xl px-5 py-4 focus:outline-none transition-all ${errors.phone && touched.phone
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-border focus:border-foreground"
                  }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              placeholder={t("contact_section.message")}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-white dark:bg-zinc-900/50 text-foreground placeholder-muted border rounded-xl px-5 py-4 h-40 resize-none focus:outline-none transition-all ${errors.message && touched.message
                ? "border-red-500/50 focus:border-red-500"
                : "border-border focus:border-foreground"
                }`}
            />
            {errors.message && touched.message && (
              <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.message}</p>
            )}
          </div>

          <div className="w-full mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background font-bold rounded-xl px-6 py-4 hover:opacity-90 transition-all transform active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? t("contact_section.button_sending") : t("contact_section.button_send")}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
