import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { BrilliantTitle } from "@/components/common/BrilliantTitle";
import { CustomButtom } from "@/components/common/CustomButtom";
import { Icon } from "@/components/common/Icon";
import { downloadCV, redirectWhatsapp } from "@/utils/utils";
import { motion } from "framer-motion";

export const Info = () => {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col items-start justify-center w-full max-w-[320px]"
    >
      <h1 className="text-white text-4xl font-bold inline-block ">
        ALEJO <BrilliantTitle title="MATTALIA" />
      </h1>

      <h2 className="text-white text-xl font-bold mt-1">
        <span className="text-primary">D</span>ESARROLLADOR{" "}
        <span className="text-primary">F</span>RONTEND
      </h2>

      <p className="text-white text-sm mt-5">
        Desarrollador Frontend con experiencia en la creación de interfaces web,
        intuitivas y responsivas. Trabajo principalmente con React, Next.js y
        Typescript, enfocándome en ofrecer una experiencia de usuario fluida y
        atractiva. Me gusta cuidar los detalles, mantenerme actualizado con
        nuevas tecnologías y siempre buscar la mejor solución posible para cada
        proyecto.
        <br /> <br />
        También tengo conocimientos en backend con Node.js, NestJS, MongoDB,
        MySQL y PostgreSQL, los cuales utilizo como complemento cuando el
        proyecto lo requiere. Siempre estoy con ganas de seguir aprendiendo y
        creciendo en este camino.
      </p>

      <div className="flex gap-5 mt-6">
        <CustomButtom
          title="Descargar CV"
          variant="outlined"
          handleClick={downloadCV}
        />

        <CustomButtom
          title="Contactame"
          variant="contained"
          handleClick={redirectWhatsapp}
        />
      </div>

      <footer className="flex gap-3 mt-10">
        <Icon
          redirect="https://www.linkedin.com/in/alejo-mattalia/"
          icon={<LinkedinIcon color="#cccccc" width="30px" height="30px" />}
          title="Linkedin"
          sizeBackground="40px"
        />

        <Icon
          redirect="https://github.com/AlejoMattalia"
          icon={<GithubIcon color="#cccccc" width="30px" height="30px" />}
          title="Github"
          sizeBackground="40px"
        />

        <Icon
          redirect="https://wa.me/5493468530707"
          icon={<WhatsappIcon color="#cccccc" width="30px" height="30px" />}
          title="Whatsapp"
          sizeBackground="40px"
        />

        <Icon
          redirect="mailto:alejoomattalia@gmail.com"
          icon={<GmailIcon color="#cccccc" width="30px" height="30px" />}
          title="Gmail"
          sizeBackground="40px"
        />

        <Icon
          redirect="https://www.instagram.com/alejomattalia/"
          icon={<InstagramIcon color="#cccccc" width="30px" height="30px" />}
          title="Instagram"
          sizeBackground="40px"
        />

        <Icon
          redirect="https://www.facebook.com/alejomattalia/"
          icon={<FacebookIcon color="#cccccc" width="30px" height="30px" />}
          title="Facebook"
          sizeBackground="40px"
        />
      </footer>
    </motion.div>
  );
};
