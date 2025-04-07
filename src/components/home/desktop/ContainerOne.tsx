import { motion } from "framer-motion";
import PhotoProfile from "@/assets/images/photoProfile.jpeg";
import Tilt from "react-parallax-tilt";

export const ContainerOne = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="w-[50%] h-full border-gray-700 flex items-center justify-end gap-14"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        style={{
          width: "300px",
          borderRadius: "1.5rem",
          overflow: "hidden",
        }}
      >
        <img
          src={PhotoProfile}
          alt="Foto de perfil"
          className="w-full h-full block cursor-pointer"
        />
      </Tilt>

      <div className="h-full border">
        <h1 className="text-white text-5xl font-bold">ALEJ</h1>

        <h2 className="text-white text-3xl font-bold mt-5">
          <span className="text-primary">D</span>ESARR
        </h2>

        <p className="text-white mt-10 flex flex-col">
          <span>Desarrollador Fro</span>
          <span>y responsivas. Tra</span>
          <span>en ofrecer una ex</span>
          <span>mantenerme actu</span>
          <span>posible para cada</span>
          <span className="mt-4">También tengo co</span>
          <span>PostgreSQL, los c</span>
          <span>Siempre estoy co</span>
        </p>
      </div>
    </motion.div>
  );
};
