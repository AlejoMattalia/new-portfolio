import cvAlejoMattalia from "@/assets/pdf/AlejoMattaliaCV.pdf";

export const redirectWhatsapp = () => {
  window.open("https://wa.me/5493468530707", "_blank");
};

export const downloadCV = () => {
  window.open(cvAlejoMattalia, "_blank");
};
