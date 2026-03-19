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
    role: "Desarrollador Fullstack",
    start: "Abr 2024",
    end: "Nov 2024",
    description:
      "En BeCode me desempeñé como desarrollador full stack, participando en el desarrollo de una app web de e-commerce y una app móvil tipo Instagram, utilizando React.js, Node.js y MySQL. Colaboré tanto en el frontend como en el backend, aplicando la metodología Scrum. Además, lideré al equipo, brindando apoyo y guiando a los miembros en su crecimiento, al tiempo que presentaba avances a los clientes. Esta experiencia reforzó mis habilidades en trabajo en equipo, comunicación y liderazgo técnico.",
    technologies: ["React.js", "Node.js", "TypeScript", "MySQL"],
  },
  {
    company: "Byron",
    role: "Desarrollador Frontend",
    start: "Nov 2024",
    end: "Jun 2025",
    description:
      "Desarrollé la landing page y la aplicación de OrdenApp, una plataforma integral para restaurantes que abarca tanto el Backoffice como el Menú digital. Esta herramienta permite la gestión eficiente de menús con categorías y sugerencias, ofrece una carta digital accesible mediante códigos QR, integra pagos a través de Mercado Pago, proporciona análisis de ventas mediante reportes detallados y facilita la gestión de mesas y del personal. Para su desarrollo utilicé tecnologías como React.js, TypeScript y MUI, destacándome por mi capacidad de trabajo en equipo, comunicación efectiva y liderazgo en la coordinación del proyecto.",
    technologies: ["React.js", "TypeScript", "MUI"],
  },
  {
    company: "MDabroad",
    role: "Desarrollador Fullstack",
    start: "Jun 2025",
    end: "Actualidad",
    description:
      "Desarrollé y optimicé una plataforma transaccional utilizando PHP y Laravel, gestionando la persistencia de datos con MySQL. Implementé la arquitectura de pagos integrando múltiples pasarelas como MercadoPago, dLocalGo, PayPal, Stripe y Flywire. Participé activamente en el diseño de la interfaz y la experiencia de usuario (UX/UI) utilizando Vue.js y Blade. Además, gestioné el despliegue y la infraestructura del sistema mediante contenedores Docker y servicios de AWS.",
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
    role: "Desarrollador Fullstack",
    start: "Mar 2026",
    end: "Actualidad",
    description:
      "Desarrollé la aplicación móvil complementaria para un dispositivo wearable (lentes) enfocado en la asistencia a personas con discapacidad. Diseñé la interfaz y la lógica móvil con React Native, implementando la conectividad e integración con el hardware. El backend se construyó con Python y Django sobre infraestructura AWS, gestionando múltiples funcionalidades complejas, el procesamiento de datos y la sincronización en tiempo real.",
    technologies: ["Python", "Django", "React Native", "AWS"],
  },
];

export const timelineFreelanceData: TimeLine[] = [
  {
    company: "Freelance",
    role: "Peluquería Salvatore",
    start: "Ene 2024",
    end: "Feb 2024",
    description:
      "Diseño y desarrollo del sitio web para Salvatore Men's Club. Incluye secciones de servicios, academia, club de beneficios y sistema de redirección para reservas de turnos online.",
    technologies: ["Astro", "TailwindCSS", "JavaScript"],
  },
  {
    company: "Freelance",
    role: "Sistema Vannay",
    start: "Mar 2024",
    end: "May 2024",
    description:
      "Desarrollo de un sistema de gestión integral de clientes y contabilidad corporativa. Permite administrar de forma eficiente procesos de caja, garantizando seguridad y trazabilidad completa.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    company: "Freelance",
    role: "Corral Plagas",
    start: "Jul 2024",
    end: "Sep 2024",
    description:
      "Landing page e inscripción para la Jornada Internacional de Capacitación para empresas de Control de Plagas. Incluye pasarelas de pago y generación de tickets de acceso a la capacitación.",
    technologies: ["Next.js", "Firebase", "PayPal", "Ualá"],
  },
  {
    company: "Freelance",
    role: "Gildo Regionales",
    start: "Oct 2024",
    end: "Nov 2024",
    description:
      "E-commerce especializado en la venta de vinos boutique seleccionados por calidad y tradición. Permite a los clientes explorar y armar cajas personalizadas de vinos, con un diseño intuitivo.",
    technologies: ["React.js", "Firebase", "TailwindCSS"],
  },
  {
    company: "Freelance",
    role: "La Feria Multieventos",
    start: "Nov 2024",
    end: "Dic 2024",
    description:
      "Plataforma promocional y sistema de venta de accesos para eventos exclusivos +25. Destaca por su alta interactividad e integración de pagos ágiles para una experiencia sin interrupciones.",
    technologies: ["Next.js", "TailwindCSS", "Node.js"],
  },
  {
    company: "Freelance",
    role: "Juan Carlos Mattalia",
    start: "Dic 2024",
    end: "Ene 2025",
    description:
      "Portfolio personal y galería virtual interactiva para el artista plástico Juan Carlos Mattalia, diseñado con un estilo sumamente minimalista para enfocar la visión en sus obras de arte.",
    technologies: ["React.js", "TailwindCSS", "Firebase"],
  },
  {
    company: "Freelance",
    role: "Sistema Sporting V2",
    start: "Feb 2025",
    end: "Actualidad",
    description:
      "Sistema interno avanzado de gestión integral para el Sporting Club. Optimiza la administración de socios, el control de accesos, el control de cuotas y la emisión de reportes.",
    technologies: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
  },
];

export const projects = [
  {
    title: "Peluquería Salvatore",
    img: salvatoreImg,
    technologies: ["Astro", "TailwindCSS"],
    description:
      "Sitio minimalista y experiencia digital para el Salón Salvatore.",
    linkWeb: "https://salvatoremensclub.com/",
  },
  {
    title: "Sistema Vannay",
    img: vannayImg,
    technologies: ["React js", "Node.js", "PostgreSQL"],
    description:
      "Sistema avanzado de gestión de clientes y contabilidad financiera.",
    linkWeb: "https://sistema-vannay.vercel.app/",
  },
  {
    title: "Corral Plagas",
    img: corralplagasImg,
    technologies: ["Next js", "Firebase"],
    description:
      "Inscripciones, tickets y cobros para capacitación internacional.",
    linkWeb: "https://corralplagas.com/",
  },
  {
    title: "Gildo Regionales",
    img: gildoImg,
    technologies: ["React js", "Firebase"],
    description:
      "E-commerce de vinos de calidad y armado de cajas personalizadas.",
    linkWeb: "https://www.gildoregionales.com/",
  },
  {
    title: "La Feria Multieventos",
    img: laferiaImg,
    technologies: ["Next js", "TailwindCSS"],
    description: "Plataforma web de difusión y acceso a eventos exclusivos.",
    linkWeb: "https://www.laferiamultieventos.com/",
  },
  {
    title: "Juan Carlos Mattalia",
    img: juancarlosImg,
    technologies: ["React js", "TailwindCSS"],
    description:
      "Galería de arte virtual y portfolio interactivo hiper-minimalista.",
    linkWeb: "https://juancarlosmattalia.com/",
  },
  {
    title: "Sistema Sporting V2",
    img: sportingImg,
    technologies: ["React", "Node js", "MongoDB"],
    description:
      "Moderno sistema integral de administración para el Sporting Club.",
    linkWeb: "https://sistema-sporting-v2.vercel.app/",
  },
];
