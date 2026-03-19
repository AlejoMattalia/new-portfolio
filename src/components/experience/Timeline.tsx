import { ModalInfoExperiencie } from "@/components/common/ModalInfoExperiencie";
import { TimeLine } from "@/interface/experiencie";
import { motion } from "framer-motion";

export const Timeline = ({ array }: { array: TimeLine[] }) => {
  return (
    <div className="relative border-l border-zinc-800 ml-3 md:ml-4 py-4 pr-4">
      <div className="absolute top-0 bottom-0 -left-[1px] w-[1px] bg-gradient-to-b from-zinc-500/50 via-zinc-800 to-transparent" />

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
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-[#09090b] group-hover:bg-zinc-300 transition-colors duration-300" />

            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold text-zinc-100 tracking-tight">
                {item.company}
              </h4>
              <p className="text-zinc-400 text-sm md:text-base font-medium">{item.role}</p>
              <div className="text-xs font-semibold text-zinc-500 mt-1 uppercase tracking-widest">
                {item.start} - {item.end}
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
          <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-zinc-600 ring-4 ring-[#09090b]" />
          <p className="text-sm font-medium text-zinc-500 italic">To be continued...</p>
        </motion.div>
      </div>
    </div>
  );
};
