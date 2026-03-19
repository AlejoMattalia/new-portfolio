import { ImageTooltipProps } from "@/interface/image";
import tailwindcss from "@/assets/images/tailwindcss.webp";
import typescript from "@/assets/images/typescript.webp";
import nextImage from "@/assets/images/next.webp";
import vue from "@/assets/images/vue.webp";
import astro from "@/assets/images/astro.webp";
import postgresql from "@/assets/images/postgresql.webp";
import mysql from "@/assets/images/mysql.webp";
import mongo from "@/assets/images/mongo.webp";
import git from "@/assets/images/git.webp";
import github from "@/assets/images/github.webp";
import docker from "@/assets/images/docker.webp";
import firebase from "@/assets/images/firebase.webp";
import postman from "@/assets/images/postman.webp";

// We use full-color devicon links for the ones that were dark or missing
const reactColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const reactNativeColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"; // React Native uses the same logo
const phpColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg";
const laravelColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg";
const pythonColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
const djangoColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"; // Django is traditionally green
const nodeColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";
const nestColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg";
const awsColor =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";

export const arrayFrontend: ImageTooltipProps[] = [
  { title: "React", image: reactColor },
  { title: "React Native", image: reactNativeColor },
  { title: "VueJS", image: vue },
  { title: "Next.js", image: nextImage },
  { title: "TypeScript", image: typescript },
  { title: "TailwindCSS", image: tailwindcss },
  { title: "Astro", image: astro },
];

export const arrayBackend: ImageTooltipProps[] = [
  { title: "PHP", image: phpColor },
  { title: "Laravel", image: laravelColor },
  { title: "Python", image: pythonColor },
  { title: "Django", image: djangoColor },
  { title: "NodeJS", image: nodeColor },
  { title: "NestJS", image: nestColor },
];

export const arrayInfra: ImageTooltipProps[] = [
  { title: "AWS", image: awsColor },
  { title: "Docker", image: docker },
  { title: "MySQL", image: mysql },
  { title: "PostgreSQL", image: postgresql },
  { title: "MongoDB", image: mongo },
  { title: "Firebase", image: firebase },
  { title: "Git", image: git },
  { title: "GitHub", image: github },
  { title: "Postman", image: postman },
];

// Fallbacks for compatibility
export const arrayImagesReactLibrary: ImageTooltipProps[] = [];
export const arrayPHP: ImageTooltipProps[] = [];
export const arrayPythonJS: ImageTooltipProps[] = [];
export const arrayOtherTechnologies: ImageTooltipProps[] = [];
