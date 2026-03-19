import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { Icon } from "@/components/common/Icon";

export const Sidebar = () => {
  return (
    <section className="hidden fixed left-0 h-screen z-20 xl:flex flex-col gap-6 items-start justify-center p-6 mix-blend-difference">
      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="https://www.linkedin.com/in/alejo-mattalia/"
          icon={<LinkedinIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          alejo-mattalia
        </span>
      </div>

      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="https://github.com/AlejoMattalia"
          icon={<GithubIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          AlejoMattalia
        </span>
      </div>

      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="https://wa.me/5493468530707"
          icon={<WhatsappIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          +54 9 3468 530707
        </span>
      </div>

      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="mailto:alejoomattalia@gmail.com"
          icon={<GmailIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          alejoomattalia@gmail.com
        </span>
      </div>

      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="https://www.instagram.com/alejomattalia/"
          icon={<InstagramIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          @alejomattalia
        </span>
      </div>

      <div className="group flex items-center gap-4 relative cursor-pointer">
        <Icon
          redirect="https://www.facebook.com/alejomattalia/"
          icon={<FacebookIcon color="currentColor" width="20px" height="20px" />}
        />
        <span className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-zinc-300 text-sm whitespace-nowrap absolute left-14 pointer-events-none">
          alejomattalia
        </span>
      </div>
    </section>
  );
};
