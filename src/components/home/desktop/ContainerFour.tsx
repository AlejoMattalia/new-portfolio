import { motion } from "framer-motion";
import { Icon } from "../../common/Icon";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { CustomButtom } from "../../common/CustomButtom";
import { redirectWhatsapp } from "@/utils/utils";

export const ContainerFour = () => {
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[50%] flex flex-col justify-start items-start gap-8"
    >
      <div className="mb-5 flex gap-5 relative left-2.5">
        <Icon
          redirect="mailto:alejoomattalia@gmail.com"
          icon={<GmailIcon color="#cccccc" width="40px" height="40px" />}
          title="Gmail"
        />

        <Icon
          redirect="https://www.instagram.com/alejomattalia/"
          icon={<InstagramIcon color="#cccccc" width="40px" height="40px" />}
          title="Instagram"
        />

        <Icon
          redirect="https://www.facebook.com/alejomattalia/"
          icon={<FacebookIcon color="#cccccc" width="40px" height="40px" />}
          title="Facebook"
        />
      </div>
      <div className="relative left-3">
        <CustomButtom
          title="Contactame"
          variant="contained"
          handleClick={redirectWhatsapp}
        />
      </div>
    </motion.div>
  );
};
