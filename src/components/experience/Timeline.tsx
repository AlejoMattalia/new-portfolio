import { ModalInfoExperiencie } from "@/components/common/ModalInfoExperiencie";
import { TimeLine } from "@/interface/experiencie";
import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Timeline = ({ array }: { array: TimeLine[] }) => {
  const { t } = useCustomTranslation();

  const translateDate = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split(" ");
    if (parts[0].startsWith("months.") || parts[0].startsWith("common.")) {
      const translatedMonth = t(parts[0]);
      return parts.length > 1 ? `${translatedMonth} ${parts[1]}` : translatedMonth;
    }
    return t(dateStr); // For cases like just "common.present"
  };

  return (
    <div className="relative border-l border-border ml-3 md:ml-4 py-4 pr-4 transition-colors">
      <div className="absolute top-0 bottom-0 -left-[1px] w-[1px] bg-gradient-to-b from-muted via-border to-transparent transition-colors" />

      <div className="flex flex-col gap-12">
        {array.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted ring-4 ring-background group-hover:bg-foreground transition-all duration-300" />

            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold text-foreground tracking-tight transition-colors">
                {item.company}
              </h4>
              <p className="text-muted text-sm md:text-base font-medium transition-colors">{t(item.role)}</p>
              <div className="text-xs font-semibold text-muted mt-1 uppercase tracking-widest transition-colors">
                {translateDate(item.start)} - {translateDate(item.end)}
              </div>
            </div>

            <div className="mt-4 inline-block">
              <ModalInfoExperiencie data={item} />
            </div>
          </motion.div>
        ))}

        {/* Continuation Marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative pl-8 mt-4"
        >
          <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-muted ring-4 ring-background transition-colors" />
          <p className="text-sm font-medium text-muted italic transition-colors">{t("experience_section.to_be_continued")}</p>
        </motion.div>
      </div>
    </div>
  );
};
