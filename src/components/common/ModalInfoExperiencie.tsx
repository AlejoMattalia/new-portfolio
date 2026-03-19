import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TimeLine } from "@/interface/experiencie";
import { CloseIcon } from "@/assets/icons/CloseIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 500,
  bgcolor: "#09090b",
  border: "1px solid rgba(82, 82, 91, 0.3)", // border-zinc-600/30
  borderRadius: "24px",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
  p: { xs: 3, sm: 5 },
  outline: "none",
};

export function ModalInfoExperiencie({ data }: { data: TimeLine }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="mt-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative group inline-block"
        onClick={handleOpen}
      >
        View Details
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <Box sx={style}>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-zinc-800/50"
            aria-label="Close modal"
          >
            <CloseIcon width="24px" height="24px" color="currentColor" />
          </button>

          <h2 id="modal-modal-title" className="text-2xl font-bold text-white tracking-tight pr-8">
            {data.role}
          </h2>
          <h3 className="text-lg font-medium text-zinc-400 mt-1">
            {data.company}
          </h3>

          <div className="mt-6">
            <p id="modal-modal-description" className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              {data.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Technologies Used
            </h4>
            <div className="flex gap-2 flex-wrap">
              {data.technologies.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800/30 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
