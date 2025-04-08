import { Button } from "@mui/material";
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
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      email: Yup.string()
        .email("Email inválido")
        .required("El email es requerido"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
        .min(6, "El teléfono es muy corto")
        .max(15, "El teléfono es muy largo")
        .required("El teléfono es requerido"),
      message: Yup.string().required("El mensaje es requerido"),
    }),
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        toast.success("Correo enviado correctamente");
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Error al enviar el correo");
      }
    },
  });

  return (
    <section className="w-full max-w-[950px] mx-auto relative z-20 mt-20 lg:mt-28 px-6 flex flex-col items-center justify-center" id="contact">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        CONTACTO
      </h1>

      <form
        className="flex flex-col gap-5 w-full sm:w-2/3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-[#2a2a2a] text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none transition ${
              errors.name && touched.name
                ? "border-red-500"
                : "border-gray-600 focus:border-primary"
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-[#2a2a2a] text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none transition ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-600 focus:border-primary"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Teléfono"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-[#2a2a2a] text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none transition ${
              errors.phone && touched.phone
                ? "border-red-500"
                : "border-gray-600 focus:border-primary"
            }`}
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            placeholder="Mensaje"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-[#2a2a2a] text-white placeholder-gray-400 border rounded-lg px-4 py-3 h-32 resize-none focus:outline-none transition ${
              errors.message && touched.message
                ? "border-red-500"
                : "border-gray-600 focus:border-primary"
            }`}
          ></textarea>
          {errors.message && touched.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </section>
  );
};
