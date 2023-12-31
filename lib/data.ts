import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HomeVistaImg from "@/public/HomeVista.jpg";
import ImageBoxImg from "@/public/ImageBox.jpg";
import BlueChatImg from "@/public/BlueChat.jpg";
import LittleLemonImg from "@/public/LittleLemon.jpg";
import PortfolioImg from "@/public/Portfolio.jpg";
import TicTacToeImg from "@/public/Tic-Tac-Toe.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PACE Junior College",
    location: "Thane, Maharashtra",
    description:
      "I did 2 years of JEE preparation in PACE Junior College",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Indian Institute of Information Technology, Nagpur",
    location: "Nagpur, Maharashtra",
    description:
      "Currently persuing my B.Tech in Electronics and Communication Engineering at IIIT Nagpur.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  }
] as const;

export const projectsData = [
  {
    title: "HomeVista",
    description:
      "A comprehensive Real Estate or hotel booking system, enabling users to effortlessly search, browse and book accommodations.",
    githubLink:"https://github.com/pranav4112/HomeVista",
    liveLink:"https://www.homevista.live",
    tags: ["React", "Node.js","Express.js", "MongoDB", "Tailwind CSS"],
    imageUrl: HomeVistaImg,
  },
  {
    title: "ImageBox",
    description:
      "Created an engaging Image Gallery app, displaying over 1,000 high-resolution images from diverse sources",
    githubLink:"https://github.com/pranav4112/ImageBox",
    liveLink:"https://img-box.vercel.app",
    tags: ["React", "Javascript", "HTML", "CSS", "REST Api"],
    imageUrl: ImageBoxImg,
  },
  {
    title: "BlueChat",
    description:
      "A real-time chat application using React Native, facilitating seamless communication among users.",
    githubLink:"https://github.com/pranav4112/BlueChat",
    liveLink:"",
    tags: ["React native", "javascript", "Native wind", "Firebase", "CSS"],
    imageUrl: BlueChatImg,
  },
  {
    title: "LittleLemon",
    description:
      "A Restaurant Table Booking System Demo, with form validation enhancing the overall user experience.",
    githubLink:"https://github.com/pranav4112/coursera_capstone_project",
    liveLink:"",
    tags: ["React", "Javascript", "HTML", "CSS", "Form validation"],
    imageUrl: LittleLemonImg,
  },
  {
    title: "Portfolio",
    description:
      "Crafted a comprehensive portfolio that effectively showcases a range of my projects and skills",
    githubLink:"https://github.com/pranav4112/Portfolio",
    liveLink:"https://www.pranavshastri.me",
    tags: ["Next.js", "React.js", "Typescript", "Tailwind", "Framer motion"],
    imageUrl: PortfolioImg,
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "an interactive and fun Tic-Tac-Toe game, offering an enjoyable gaming experience",
    githubLink:"https://github.com/pranav4112/Tic-Tac-Toe",
    liveLink:"https://play-tic-tac-toe.vercel.app",
    tags: ["HTML", "CSS", "Javascript", "DOM manipulation"],
    imageUrl: TicTacToeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Git",
  "REST API",
  "TypeScript",
  "SQL",
  "C++",
  "Java",
  "DSA",
  "OOPs",
  "Redux",
  "Framer Motion",
] as const;
