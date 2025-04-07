import { BrilliantTitle } from "@/components/common/BrilliantTitle";
import { motion } from "framer-motion";

export const ContainerTwo = () => {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="w-[50%] h-full flex flex-col items-start justify-start relative top-[1px] right-[1px]"
    >
      <h1 className="text-white text-5xl font-bold inline-block relative right-2 bottom-0.5">
        O <BrilliantTitle title="MATTALIA" />
      </h1>

      <h2 className="text-white text-3xl font-bold mt-5 relative right-1 bottom-0.5">
        OLLADOR <span className="text-primary">F</span>RONTEND
      </h2>

      <p className="text-white mt-9.5 flex flex-col">
        <span className="relative right-[5px]">
          ntend con experiencia en la creación de interfaces web, intuitivas
        </span>
        <span>
          bajo principalmente con React, Next.js y Typescript, enfocándome
        </span>
        <span className="relative right-[5px]">
          periencia de usuario fluida y atractiva. Me gusta cuidar los detalles,
        </span>
        <span className="relative right-[6px]">
          alizado con nuevas tecnologías y siempre buscar la mejor solución
        </span>
        <span className="relative left-[1px]">proyecto.</span>
        <span className="mt-4 relative right-[5px]">
          nocimientos en backend con Node.js, NestJS, MongoDB, MySQL y{" "}
        </span>
        <span className="relative right-[1px]">
          uales utilizo como complemento cuando el proyecto lo requiere.
        </span>
        <span className="relative right-[6px]">
          n ganas de seguir aprendiendo y creciendo en este camino.
        </span>
      </p>
    </motion.div>
  );
};
