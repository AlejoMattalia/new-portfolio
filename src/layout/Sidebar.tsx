import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { Icon } from "@/components/common/Icon";

export const Sidebar = () => {
  return (
    <section className="hidden fixed left-0 h-screen z-20 xl:flex flex-col gap-5 items-start justify-center p-5">
      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="https://www.linkedin.com/in/alejo-mattalia/"
          icon={<LinkedinIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          alejo-mattalia
        </span>
      </div>

      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="https://github.com/AlejoMattalia"
          icon={<GithubIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          AlejoMattalia
        </span>
      </div>

      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="https://wa.me/5493468530707"
          icon={<WhatsappIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          +54 9 3468 530707
        </span>
      </div>

      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="mailto:alejoomattalia@gmail.com"
          icon={<GmailIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          alejoomattalia@gmail.com
        </span>
      </div>

      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="https://www.instagram.com/alejomattalia/"
          icon={<InstagramIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          @alejomattalia
        </span>
      </div>

      <div className="group flex items-center gap-2 relative">
        <Icon
          redirect="https://www.facebook.com/alejomattalia/"
          icon={<FacebookIcon color="#cccccc" width="40px" height="40px" />}
          sizeBackground="40px"
        />
        <span className="hidden min-[1525px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap absolute left-14">
          alejomattalia
        </span>
      </div>
    </section>
  );
};
