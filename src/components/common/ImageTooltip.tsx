import { ImageTooltipProps } from "@/interface/image";
import { Tooltip, tooltipClasses } from "@mui/material";

export const ImageTooltip = ({
  image,
  title,
  size,
  placement,
}: ImageTooltipProps) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: "10px",
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: "5px",
              },
          },
        },
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ minWidth: `${size}px`, maxWidth: `${size}px` }}
        className="cursor-pointer"
      />
    </Tooltip>
  );
};
