"use client";

import { Briefcase, Code2, GraduationCap, Server, Layers } from "lucide-react";
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  { ssr: false }
);

const careerData = [
  {
    id: 1,
    title: "Budget Caddie",
    date: "Feb 2025 - Dec 2025",
    content:
      "Owned backend APIs end-to-end in Java/Spring Boot — cut SQL query times 25%, slashed deployment effort 60% with GitHub Actions & Jenkins, and shaved 40% off core page load times.",
    category: "Software Engineer",
    icon: Briefcase,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Iter Innovendi",
    date: "Jul 2024 - Jan 2025",
    content:
      "Developing a job seeker platform using Large Language Models (LLMs), incorporating in-context learning, few-shot learning, and prompt engineering to personalize CVs based on job descriptions",
    category: "Full Stack Developer",
    icon: Server,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "University of Ottawa",
    date: "Jan 2024 - Jun 2024",
    content:
      "Modernized the ICanBeWell React app, lifting accessibility scores 25%, and tightened CI/CD to cut deployment rollbacks and push the success rate up 15%.",
    category: "Software Developer",
    icon: GraduationCap,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Klass Naaijkens",
    date: "Mar 2021 - Jun 2022",
    content:
      "Designed fault-tolerant Java/Spring Boot microservices, containerized with Docker, deployed on AWS — reduced infrastructure costs 15% while improving incident detection.",
    category: "Software Engineer",
    icon: Layers,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Agile Media Lab",
    date: "Jan 2020 - Feb 2021",
    content:
      "Built RESTful APIs with Java/Spring Boot and tuned MySQL performance — reduced system downtime 15% and improved reporting accuracy across the platform.",
    category: "Software Engineer",
    icon: Code2,
    relatedIds: [4],
    status: "completed" as const,
    energy: 100,
  },
];

export function CareerTimeline() {
  return (
    <section className="pt-10 pb-5 px-4">
      <div className="max-w-5xl mx-auto mb-8">
        <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Career Timeline</h2>
        <p className="text-white/40 text-sm mt-2 max-w-md">
          Click any node to explore the role. Click the background to reset.
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={careerData} />
    </section>
  );
}
