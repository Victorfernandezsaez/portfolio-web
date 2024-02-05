import React from "react";
import SimulatorImg from "@/public/simulator.png";
import aiImg from "@/public/ai.png";
import bikeAppImg from "@/public/bikeApp.png";
import weatherAppImg from "@/public/sun-cloud.png";
import autoTrentzsch from "@/public/autoTrentzsch.png";

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
        title: "auto-trentzsch",
        description:
            "This project is a website for Auto Trentzsch, a freie KFZ Werkstatt und Reifen1+ Partner in Dresden",
        tags: ["React", "TypeScript", "Tailwind"],
        imageUrl: autoTrentzsch,
        navTo: ['https://github.com/Victorfernandezsaez/auto-trentzsch']
    },
    {
        title: "Mad Simulator",
        description:
            "This is the prototipe of a website for a client who wants to sell a car simulator.",
        tags: ["React", "Tailwind"],
        imageUrl: SimulatorImg,
        navTo: ['https://github.com/Victorfernandezsaez/mad-simulator'],
    },
    {
        title: "gpt3",
        description:
            "A project to practice my skills with CSS ",
        tags: ["React", "CSS"],
        imageUrl: aiImg,
        navTo: ['https://github.com/Victorfernandezsaez/gpt3_victor2'],
    },
    {
        title: "Bike App",
        description:
            "A social platform to find places to sleep, to find showers or sare your trip with other riders",
        tags: ["React", "MongoDB", "Express", "Tailwind"],
        imageUrl: bikeAppImg,
        navTo: ['https://github.com/Victorfernandezsaez/bici-app-frontend', 'https://github.com/Victorfernandezsaez/bici-app-backend'],
    },
    {
        title: "Weather App",
        description:
            "A weather app to that I developed to practice my skills with TypeScript",
        tags: ["React", "TypeScript", "Tailwind"],
        imageUrl: weatherAppImg,
        navTo: ['https://github.com/Victorfernandezsaez/weather-app'],
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