import { ContainerOne } from "./desktop/ContainerOne";
import { ContainerTwo } from "./desktop/ContainerTwo";
import { ContainerThree } from "./desktop/ContainerThree";
import { ContainerFour } from "./desktop/ContainerFour";
import { Info } from "./mobile/Info";
import PhotoProfile from "@/assets/images/photoProfile.jpeg";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="hidden relative z-10 lg:flex flex-col items-center justify-center w-full mt-30 mb-20">
        <div className="w-full flex items-center justify-between">
          <ContainerOne />
          <ContainerTwo />
        </div>

        <div className="w-full flex items-center justify-between mt-16">
          <ContainerThree />
          <ContainerFour />
        </div>
      </div>

      <div className="lg:hidden z-20 relative p-4 pt-10 flex items-start justify-center flex-wrap gap-5 w-full">
        <motion.img
          src={PhotoProfile}
          alt="Foto de perfil"
          className="rounded-[1.5rem] w-full max-w-[320px]"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <Info />
      </div>
    </>
  );
};
