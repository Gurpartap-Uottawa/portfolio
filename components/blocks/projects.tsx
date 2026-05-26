"use client";

import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const projects: Gallery4Item[] = [
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A real-time weather app with an AI-powered chatbot assistant. Automatically detects your location via IP, displays current conditions, hourly and 3-day forecasts, and lets you ask weather-related questions through a floating chat widget.",
    href: "https://github.com/Gurpartap-Uottawa/weather-app",
    image: "/projects/weatherAppLandingPage.png",
    tags: ["Next.js 16", "TypeScript", "Tailwind v4", "WeatherAPI", "Groq AI", "Framer Motion"],
    github: "https://github.com/Gurpartap-Uottawa/weather-app",
    live: "https://vercel.com/gurpartap-singh-s-projects/portfolio",
    status: "Completed",
  },
  {
    id: "github-finder",
    title: "GitHub Finder",
    description:
      "A web application that uses the GitHub API to search for users, fetch their profile data, and display their public repositories with stats.",
    href: "https://main--github-finder-121.netlify.app/",
    image: "/projects/GithubFinderLandingPage.png",
    tags: ["React", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/Gurpartap-Uottawa/Github-Finder",
    live: "https://main--github-finder-121.netlify.app/",
    status: "Completed",
  },
  {
    id: "shop-eazy",
    title: "Shop Eazy",
    description:
      "An online shopping portal where registered users can add, update, and delete products in their cart. Integrated PayPal for payments and deployed on Microsoft Azure via Azure DevOps with REST APIs powering all core operations.",
    href: "https://github.com/rajsaurav4055/shop-eazy",
    image: "/projects/shopeazyLandingPage.png",
    tags: ["Python", "Django 4.1", "MySQL", "PayPal IPN", "Docker", "Azure DevOps"],
    github: "https://github.com/rajsaurav4055/shop-eazy",
    status: "Completed",
  },
];

export function Projects() {
  return (
    <Gallery4
      title="Projects"
      description="A selection of things I've built — from AI-powered apps to developer tools."
      items={projects}
    />
  );
}
