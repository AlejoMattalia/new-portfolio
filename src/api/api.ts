import { TimeLine } from "@/interface/experiencie";
import salvatoreImg from "@/assets/images/projects/salvatore.png";
import vannayImg from "@/assets/images/projects/vannay.png";
import corralplagasImg from "@/assets/images/projects/corralplagas.png";
import gildoImg from "@/assets/images/projects/gildoregionales.png";
import laferiaImg from "@/assets/images/projects/laferiamultieventos.png";
import juancarlosImg from "@/assets/images/projects/juancarlosmattalia.png";
import sportingImg from "@/assets/images/projects/sportingv2.png";
export const timelineUnderDependencyData: TimeLine[] = [
  {
    company: "BeCode",
    role: "experience.becode.role",
    start: "months.apr 2024",
    end: "months.nov 2024",
    description: "experience.becode.description",
    technologies: ["React.js", "Node.js", "TypeScript", "MySQL"],
  },
  {
    company: "Byron",
    role: "experience.byron.role",
    start: "months.nov 2024",
    end: "months.jun 2025",
    description: "experience.byron.description",
    technologies: ["React.js", "TypeScript", "MUI"],
  },
  {
    company: "MDabroad",
    role: "experience.mdabroad.role",
    start: "months.jun 2025",
    end: "common.present",
    description: "experience.mdabroad.description",
    technologies: [
      "PHP",
      "Laravel",
      "Vue.js",
      "MySQL",
      "Docker",
      "AWS",
      "Stripe",
      "PayPal",
    ],
  },
  {
    company: "Ceacus",
    role: "experience.ceacus.role",
    start: "months.mar 2026",
    end: "common.present",
    description: "experience.ceacus.description",
    technologies: ["Python", "Django", "React Native", "AWS"],
  },
];

export const timelineFreelanceData: TimeLine[] = [
  {
    company: "Freelance",
    role: "experience.salvatore.role",
    start: "months.jan 2024",
    end: "months.feb 2024",
    description: "experience.salvatore.description",
    technologies: ["Astro", "TailwindCSS", "JavaScript"],
  },
  {
    company: "Freelance",
    role: "experience.vannay_system.role",
    start: "months.mar 2024",
    end: "months.may 2024",
    description: "experience.vannay_system.description",
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    company: "Freelance",
    role: "experience.corral_plagas.role",
    start: "months.jul 2024",
    end: "months.sep 2024",
    description: "experience.corral_plagas.description",
    technologies: ["Next.js", "Firebase", "PayPal", "Ualá"],
  },
  {
    company: "Freelance",
    role: "experience.gildo.role",
    start: "months.oct 2024",
    end: "months.nov 2024",
    description: "experience.gildo.description",
    technologies: ["React.js", "Firebase", "TailwindCSS"],
  },
  {
    company: "Freelance",
    role: "experience.la_feria.role",
    start: "months.nov 2024",
    end: "months.dec 2024",
    description: "experience.la_feria.description",
    technologies: ["Next.js", "TailwindCSS", "Node.js"],
  },
  {
    company: "Freelance",
    role: "experience.juan_carlos.role",
    start: "months.dec 2024",
    end: "months.jan 2025",
    description: "experience.juan_carlos.description",
    technologies: ["React.js", "TailwindCSS", "Firebase"],
  },
  {
    company: "Freelance",
    role: "experience.sporting.role",
    start: "months.feb 2025",
    end: "common.present",
    description: "experience.sporting.description",
    technologies: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
  },
];

export const projects = [
  {
    title: "Peluquería Salvatore",
    img: salvatoreImg,
    technologies: ["Astro", "TailwindCSS"],
    description: "projects_list.salvatore.description",
    linkWeb: "https://salvatoremensclub.com/",
  },
  {
    title: "Sistema Vannay",
    img: vannayImg,
    technologies: ["React js", "Node.js", "PostgreSQL"],
    description: "projects_list.vannay.description",
    linkWeb: "https://sistema-vannay.vercel.app/",
  },
  {
    title: "Corral Plagas",
    img: corralplagasImg,
    technologies: ["Next js", "Firebase"],
    description: "projects_list.corral.description",
    linkWeb: "https://corralplagas.com/",
  },
  {
    title: "Gildo Regionales",
    img: gildoImg,
    technologies: ["React js", "Firebase"],
    description: "projects_list.gildo.description",
    linkWeb: "https://www.gildoregionales.com/",
  },
  {
    title: "La Feria Multieventos",
    img: laferiaImg,
    technologies: ["Next js", "TailwindCSS"],
    description: "projects_list.la_feria.description",
    linkWeb: "https://www.laferiamultieventos.com/",
  },
  {
    title: "Juan Carlos Mattalia",
    img: juancarlosImg,
    technologies: ["React js", "TailwindCSS"],
    description: "projects_list.juan_carlos.description",
    linkWeb: "https://juancarlosmattalia.com/",
  },
  {
    title: "Sistema Sporting V2",
    img: sportingImg,
    technologies: ["React", "Node js", "MongoDB"],
    description: "projects_list.sporting.description",
    linkWeb: "https://sistema-sporting-v2.vercel.app/",
  },
];
