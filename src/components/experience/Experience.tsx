import { timelineFreelanceData, timelineUnderDependencyData } from "@/api/api";
import { Timeline } from "./Timeline";
import { CustomButtom } from "../common/CustomButtom";
import { redirectWhatsapp } from "@/utils/utils";

const getExperienceDuration = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} año${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} mes${months > 1 ? "es" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" and ");
};

export const Experience = () => {
  const underDependencyDuration = getExperienceDuration("2024-04-01");
  const freelanceDuration = getExperienceDuration("2023-01-01");

  return (
    <section
      className="w-full max-w-[1200px] mx-auto z-20 relative mt-32 px-6 md:px-12"
      id="experience"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
        <p className="text-zinc-400 mt-4 max-w-[600px] mx-auto">My professional journey and freelance projects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* UNDER DEPENDENCY SECTION */}
        <div className="flex flex-col flex-1">
          <div className="mb-8 border-b border-zinc-800 pb-4">
            <h3 className="text-2xl font-semibold text-zinc-100 uppercase tracking-wider">
              Corporate
            </h3>
            <span className="text-sm font-medium text-zinc-500 mt-2 block tracking-wide">
              {underDependencyDuration} total duration
            </span>
          </div>
          <Timeline array={timelineUnderDependencyData} />
        </div>

        {/* FREELANCE SECTION */}
        <div className="flex flex-col flex-1">
          <div className="mb-8 border-b border-zinc-800 pb-4">
            <h3 className="text-2xl font-semibold text-zinc-100 uppercase tracking-wider">
              Freelance
            </h3>
            <span className="text-sm font-medium text-zinc-500 mt-2 block tracking-wide">
              {freelanceDuration} total duration
            </span>
          </div>
          <Timeline array={timelineFreelanceData} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-20">
        <CustomButtom
          title="Get In Touch"
          variant="outlined"
          handleClick={redirectWhatsapp}
        />
      </div>
    </section>
  );
};
