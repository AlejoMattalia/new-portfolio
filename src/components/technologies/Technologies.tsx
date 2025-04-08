import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

export const Technologies = () => {
  return (
    <div
      className="flex flex-col items-start justify-center w-full max-w-[1000px] z-20 relative mt-10 lg:mt-20"
      id="technologies"
    >
      <main className="flex flex-col lg:flex-row items-start justify-between w-full gap-16">
        <Primary />
        <Secondary />
      </main>
    </div>
  );
};
