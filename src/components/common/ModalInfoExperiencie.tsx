import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TimeLine } from "@/interface/experiencie";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

import { Theme } from "@mui/material";

const style = (theme: Theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 500,
  bgcolor: "background.default",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  boxShadow: theme.palette.mode === 'dark'
    ? "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
    : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
  p: { xs: 3, sm: 5 },
  outline: "none",
  transition: "all 0.3s ease",
});

export function ModalInfoExperiencie({ data }: { data: TimeLine }) {
  const { t } = useCustomTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="mt-2 text-sm font-semibold text-muted hover:text-foreground transition-all duration-300 relative group inline-block"
        onClick={handleOpen}
      >
        {t("experience_section.view_details")}
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
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
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Lighter for light mode
              backdropFilter: "blur(8px)",
              ...(open && {
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.4)",
              })
            },
          },
        }}
      >
        <Box sx={style}>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-muted hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all rounded-full"
            aria-label="Close modal"
          >
            <CloseIcon width="24px" height="24px" color="currentColor" />
          </button>

          <h2 id="modal-modal-title" className="text-2xl font-bold text-foreground tracking-tight pr-8 transition-colors">
            {t(data.role)}
          </h2>
          <h3 className="text-lg font-medium text-subtle mt-1 transition-colors">
            {data.company}
          </h3>

          <div className="mt-6">
            <p id="modal-modal-description" className="text-sm sm:text-base text-muted leading-relaxed transition-colors">
              {t(data.description)}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border transition-colors">
            <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-4 transition-colors">
              {t("experience_section.technologies_used")}
            </h4>
            <div className="flex gap-2 flex-wrap">
              {data.technologies.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-semibold text-muted bg-zinc-100 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-700/50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all"
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
