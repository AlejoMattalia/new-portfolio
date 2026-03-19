import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
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
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must contain only numbers")
        .min(6, "Phone too short")
        .max(15, "Phone too long")
        .required("Phone is required"),
      message: Yup.string().required("Message is required"),
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
      <div className="text-center mb-16 w-full max-w-[600px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Get In Touch</h2>
        <p className="text-zinc-400 mt-4">Have a project in mind? Let's work together to create something beautiful.</p>
      </div>

      <div className="w-full max-w-[600px] bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 md:p-12">
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-zinc-900/50 text-white placeholder-zinc-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.name && touched.name
                ? "border-red-500/50 focus:border-red-500"
                : "border-zinc-800 focus:border-zinc-500"
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
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-zinc-900/50 text-white placeholder-zinc-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.email && touched.email
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-zinc-800 focus:border-zinc-500"
                  }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-zinc-900/50 text-white placeholder-zinc-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.phone && touched.phone
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-zinc-800 focus:border-zinc-500"
                  }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-zinc-900/50 text-white placeholder-zinc-500 border rounded-xl px-5 py-4 h-40 resize-none focus:outline-none transition-colors ${errors.message && touched.message
                ? "border-red-500/50 focus:border-red-500"
                : "border-zinc-800 focus:border-zinc-500"
                }`}
            />
            {errors.message && touched.message && (
              <p className="text-red-400/80 text-xs ml-1 mt-1 font-medium">{errors.message}</p>
            )}
          </div>

          <div className="w-full mt-4">
            {/* Since CustomButtom takes handleClick, we use a regular button to submit or modify CustomButtom to accept type="submit". 
                I will just render a styled submit button here directly to integrate with Formik cleanly. */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-semibold rounded-xl px-6 py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
