import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TimeLine } from "@/interface/experiencie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  outline: "none",
  border: "1px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export function ModalInfoExperiencie({ data }: { data: TimeLine }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <a className="mt-0.5 underline cursor-pointer" onClick={handleOpen}>
        Ver más
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-xl font-bold text-primary">
            {data.role} - {data.company}
          </h2>
          <p className="mt-5 text-sm text-gray-300">{data.description}</p>

          <div className="flex gap-2 mt-5 flex-wrap">
            {data.technologies.map((item, index) => (
              <p
                key={index}
                className="text-sm text-primary border border-primary p-1 rounded-lg"
              >
                {item}
              </p>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
