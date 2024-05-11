// Exemple de structure de données pour les projets
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVercel } from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    title: "Enchante'Voix",
    image: "/EnchanteVoix.png", // Chemin vers l'image du projet
    description: "Site Vitrine, Cours de chant.",
    link: "https://enchante-voix.vercel.app/",
    frameworks: ["React", "Tailwindcss"],
    icon: [
      <FaReact key="react1" />, 
      <SiTailwindcss key="tailwindcss1" />
    ]
  },
  {
    id: 2,
    title: "Patronage D'Allauch",
    image: "/PATRO.png",
    description: "Site complet, envoi de mail + API instagram .",
    link: "http://patronage-allauch.vercel.app",
    frameworks: ["React", "Tailwindcss", "Node.js",],
    icon: [
      <FaReact key="react2" />, 
      <SiTailwindcss key="tailwindcss1" />,
      <FaNodeJs key="node2" />, 
      
    ]
  },
  {
    id: 3,
    title: "CRM Scan'Avis",
    image: "/thumb3.jpg",
    description: "Un CRM complet, pour permettre une visibilité rapide des données de l'entreprise",
    frameworks: ["React", "Tailwind", "Node.js", "Vercel"],
    icon: [
      <FaReact key="react3" />, 
      <SiTailwindcss key="tailwindcss1" />,
      <FaNodeJs key="node3" />, 
      <SiVercel key="vercel3" />
    ]
  },
  {
    id: 4,
    title: "Projet 4",
    image: "/thumb4.jpg",
    description: "Une brève description du projet 4.",
    link: "https://lien-vers-le-projet4.com",
    frameworks: ["React", "Node.js", "MongoDB"],
    icon: [
      <FaReact key="react4" />, 
      <FaNodeJs key="node4" />, 
      <SiMongodb key="mongodb4" />
    ]
  },
  // Ajoutez d'autres projets selon le même modèle
];
