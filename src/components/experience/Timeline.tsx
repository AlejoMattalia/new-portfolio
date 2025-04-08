import { ModalInfoExperiencie } from "@/components/common/ModalInfoExperiencie";
import { useHorizontalScrollDrag } from "@/hooks/use-horizontal-scroll-drag";
import { TimeLine } from "@/interface/experiencie";
import { RefObject, useEffect, useRef, useState } from "react";

export const Timeline = ({ array }: { array: TimeLine[] }) => {
  const [animateLine, setAnimateLine] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useHorizontalScrollDrag(scrollRef as RefObject<HTMLDivElement>);

  useEffect(() => {
    setTimeout(() => {
      setAnimateLine(true);
    }, 1000);
  }, []);

  return (
    <>
      {/* Horizontal Timeline (lg y más) */}
      <div
        ref={scrollRef}
        className="relative hidden lg:flex items-start justify-start overflow-x-auto pb-5 cursor-grab"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
        }}
      >
        {/* Línea horizontal */}
        <div
          ref={lineRef}
          className="absolute top-[60px] left-0 h-1 bg-white transition-all duration-1000 z-0"
          style={{
            width: animateLine ? `${(array.length + 2) * 205}px` : "0px",
          }}
        />

        <div className="flex gap-16 pl-2 pt-0 relative z-10">
          {/* Comienzo */}
          <div className="flex flex-col items-center">
            <div className="mb-2 text-center">
              <p className="text-lg font-medium text-white">Comienzo</p>
              <p className="text-sm text-gray-300">Autodidacta</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white" />
            <div className="mt-2 text-xs text-gray-400 text-center">
              Feb 2022
            </div>
          </div>

          {/* Experiencias */}
          {array.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-40">
              <div className="mb-2 text-center">
                <p className="text-lg font-bold text-white">{item.company}</p>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-white" />
              <div className="mt-2 text-xs text-gray-400 text-center flex flex-col">
                {item.start} - {item.end}
                <ModalInfoExperiencie data={item} />
              </div>
            </div>
          ))}

          {/* Continuará */}
          <div className="flex flex-col items-center w-40 relative top-[19px]">
            <div className="mb-2 text-center">
              <p className="text-lg font-medium text-white italic">
                Continuará...
              </p>
            </div>
            <div className="w-4 h-4 bg-white rounded-full border-2 border-dashed border-gray-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Vertical Timeline (menor a lg) */}
      <div className="relative flex lg:hidden flex-col items-start justify-start pl-4">
        {/* Línea vertical */}
        <div
          ref={lineRef}
          className="absolute left-[22px] top-[38px] w-1 bg-white transition-all duration-1000 z-0"
          style={{
            height: animateLine ? `${(array.length + 2) * 130}px` : "0px",
          }}
        />

        <div className="flex flex-col gap-16 pt-0 relative z-10">
          {/* Comienzo */}
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white relative z-10" />
            <div>
              <p className="text-lg font-medium text-white">Comienzo</p>
              <p className="text-sm text-gray-300">Autodidacta</p>
              <p className="mt-1 text-xs text-gray-400">Feb 2022</p>
            </div>
          </div>

          {/* Experiencias */}
          {array.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-white relative z-10" />
              <div>
                <p className="text-lg font-medium text-white">
                  {item.company && item.company}
                </p>
                <p className="text-sm text-gray-300">{item.role}</p>
                <div className="mt-1 text-xs text-gray-400">
                  {item.start} - {item.end}
                  <ModalInfoExperiencie data={item} />
                </div>
              </div>
            </div>
          ))}

          {/* Continuará */}
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-white rounded-full border-2 border-dashed border-gray-500 animate-pulse relative z-10" />
            <div>
              <p className="text-sm text-gray-300 italic">Continuará...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
