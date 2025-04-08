import { motion } from "framer-motion";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { CustomButtom } from "../../common/CustomButtom";
import { Icon } from "../../common/Icon";
import { downloadCV } from "@/utils/utils";

export const ContainerThree = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-[50%] flex flex-col justify-center items-end gap-8"
    >
      <div className="mb-5 flex gap-5 relative right-2.5 xl:hidden">
        <Icon
          redirect="https://www.linkedin.com/in/alejo-mattalia/"
          icon={<LinkedinIcon color="#cccccc" width="40px" height="40px" />}
          title="Linkedin"
        />

        <Icon
          redirect="https://github.com/AlejoMattalia"
          icon={<GithubIcon color="#cccccc" width="40px" height="40px" />}
          title="Github"
        />

        <Icon
          redirect="https://wa.me/5493468530707"
          icon={<WhatsappIcon color="#cccccc" width="40px" height="40px" />}
          title="Whatsapp"
        />
      </div>

      <div className="relative right-3">
        <CustomButtom
          title="Descargar CV"
          variant="outlined"
          handleClick={downloadCV}
        />
      </div>
    </motion.div>
  );
};
