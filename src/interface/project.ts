export interface CardProps {
  title: string;
  img?: string;
  cover?: "assistant" | "directory" | "automotive" | "studio" | "invoice" | "nfc";
  category?: string;
  technologies: string[];
  description: string;
  linkWeb?: string;
  linkRep?: string;
}
