"use client"

import WebGLShader from "@/components/ui/web-gl-shader"
import { Certifications } from "@/components/blocks/certifications"
import { CareerTimeline } from "@/components/blocks/career-timeline"
import { Projects } from "@/components/blocks/projects"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Mail } from "lucide-react"

function GitHubIcon() {
  return <img src="/icons/github.svg" alt="" aria-hidden="true" className="size-4 invert" />
}

function LinkedInIcon() {
  return <img src="/icons/linkedin.svg" alt="" aria-hidden="true" className="size-4 invert" />
}

export function Hero() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
        <WebGLShader />
        <div className="relative z-10 border border-white/15 p-[2px] w-full mx-auto max-w-3xl rounded-3xl">
          <main className="relative border border-white/10 py-10 sm:py-16 px-5 sm:px-12 overflow-hidden rounded-3xl">

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 m-0.5 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500 uppercase tracking-widest">Available for New Projects</p>
            </div>

            <h1 className="mb-4 text-white text-center text-5xl sm:text-7xl font-extrabold tracking-tighter">
              Gurpartap<br />Singh
            </h1>

            <p className="text-white/55 text-center text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Software engineer with 4+ years of experience building Java/Python backends, React frontends, and SQL-backed data workflows in
              fast-moving teams. I've owned features end to end—optimizing APIs and queries, improving CI/CD with GitHub Actions and Jenkins,
              deploying to AWS, and debugging production issues—and I use AI coding tools like Cursor and Claude Code as everyday collaborators
              for refactors, tests, and repo exploration while keeping correctness and code quality firmly in my own hands.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["Java / Spring Boot", "Python", "TypeScript / React", "AWS · GCP basics", "Docker · CI/CD", "Github Actions · Jenkins", "Claude Code · Cursor"].map((tag) => (
                <span key={tag} className="text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              <LiquidButton size="icon" className="text-white" onClick={() => { window.location.href = "mailto:gps0806@gmail.com" }}>
                <Mail className="size-4" />
              </LiquidButton>
              <LiquidButton size="icon" className="text-white" onClick={() => window.open("https://www.linkedin.com/in/gurpartap-singh08", "_blank", "noopener,noreferrer")}>
                <LinkedInIcon />
              </LiquidButton>
              <LiquidButton size="icon" className="text-white" onClick={() => window.open("https://github.com/Gurpartap-Uottawa", "_blank", "noopener,noreferrer")}>
                <GitHubIcon />
              </LiquidButton>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex gap-5 sm:gap-8 justify-center flex-wrap">
              {[
                { num: "4+", label: "Years experience" },
                { num: "5", label: "Companies" },
                { num: "3", label: "Anthropic certs" },
                { num: "M.Eng", label: "U of Ottawa" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-white">{s.num}</span>
                  <span className="text-[10px] text-white/35 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
            <CareerTimeline />
            <Projects />
            <Certifications />
          </main>
        </div>
      </div>
  )
}