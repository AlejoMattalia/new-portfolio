import { IconProps } from "@/interface/icon";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const Icon = ({
  icon,
  title,
  redirect,
  sizeBackground = "48px",
  onClick,
}: IconProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={redirect}>
      <Tooltip
        title={title}
        arrow
        placement="top"
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                {
                  marginBottom: "10px",
                },
            },
          },
        }}
      >
        <IconButton
          onClick={onClick}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            borderRadius: "50%",
            width: sizeBackground,
            height: sizeBackground,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark, // mismo hover que un <Button />
            },
          })}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </a>
  );
};
