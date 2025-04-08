import { timelineFreelanceData, timelineUnderDependencyData } from "@/api/api";
import { BrilliantTitle } from "../common/BrilliantTitle";
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

  return [yearStr, monthStr].filter(Boolean).join(" y ");
};

export const Experience = () => {
  const underDependencyDuration = getExperienceDuration("2024-04-01");
  const freelanceDuration = getExperienceDuration("2023-01-01");

  return (
    <section
      className="w-full max-w-[950px] relative z-20 mt-20 lg:mt-28"
      id="experience"
    >
      <h1 className="text-3xl font-bold text-center mb-10">EXPERIENCIA</h1>

      <section className="hidden w-full px-4 lg:flex lg:flex-col">
        <h1 className="text-xl font-bold mb-6">
          <BrilliantTitle title="BAJO DEPENDENCIA" />{" "}
          <span className="text-sm font-normal">
            - {underDependencyDuration}
          </span>
        </h1>

        <Timeline array={timelineUnderDependencyData} />
        <h1 className="text-xl font-bold mb-6 mt-10">
          <BrilliantTitle title="FREELANCE" />{" "}
          <span className="text-sm font-normal"> - {freelanceDuration}</span>
        </h1>

        <Timeline array={timelineFreelanceData} />
      </section>

      <section className="w-full px-4 lg:hidden flex gap-32 sm:gap-20 items-start justify-center flex-wrap">
        <div>
          <h1 className="text-xl font-bold mb-3">
            <BrilliantTitle title="BAJO DEPENDENCIA" />{" "}
            <span className="text-sm font-normal">
              - {underDependencyDuration}
            </span>
          </h1>
          <Timeline array={timelineUnderDependencyData} />
        </div>

        <div className="relative right-6 sm:right-0">
          <h1 className="text-xl font-bold mb-3">
            <BrilliantTitle title="FREELANCE" />{" "}
            <span className="text-sm font-normal">- {freelanceDuration}</span>
          </h1>

          <Timeline array={timelineFreelanceData} />
        </div>
      </section>

      <div className="w-full flex items-center justify-center gap-5 mt-26 lg:mt-14">
        <CustomButtom
          title="Contactame"
          variant="contained"
          handleClick={redirectWhatsapp}
        />
      </div>
    </section>
  );
};
