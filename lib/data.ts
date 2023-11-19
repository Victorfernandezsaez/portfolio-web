import React from "react";
import SimulatorImg from "@/public/simulator.png";
import aiImg from "@/public/ai.png";
import bikeAppImg from "@/public/bikeApp.png";
import weatherAppImg from "@/public/sun-cloud.png";

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
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "Mad Simulator",
        description:
            "This is the prototipe of a website for a client who wants to sell a car simulator.",
        tags: ["React", "Tailwind"],
        imageUrl: SimulatorImg,
    },
    {
        title: "gpt3",
        description:
            "A project to practice my skills with CSS ",
        tags: ["React", "CSS"],
        imageUrl: aiImg,
    },
    {
        title: "Bike App",
        description:
            "A social platform to find places to sleep, to find showers or sare your trip with other riders",
        tags: ["React", "MongoDB", "Express", "Tailwind"],
        imageUrl: bikeAppImg,
    },
    {
        title: "Weather App",
        description:
            "A weather app to that I developed to practice my skills with TypeScript",
        tags: ["React", "TypeScript", "Tailwind"],
        imageUrl: weatherAppImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Python",
] as const;