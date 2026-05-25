"use client"

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const certs = [
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "May 16, 2026",
    certNo: "xapj47267zvm",
    href: "https://verify.skilljar.com/c/xapj47267zvm",
    image: "/certs/claude101.jpg",
    description: "Foundations of working with Claude — prompting, capabilities, and responsible AI usage.",
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "May 17, 2026",
    certNo: " ",
    href: "https://verify.skilljar.com/c/rq9y3hpnnwpf",
    image: "/certs/claudeCode101.jpg",
    description: "Hands-on development with Claude Code — agentic coding, CLI workflows, and AI-assisted engineering.",
  },
  {
    id: "claude-code-action",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 21, 2026",
    certNo: "u2c22v6xo62o",
    href: "https://verify.skilljar.com/c/u2c22v6xo62o",
    image: "/certs/ClaudeCodeInAction.jpg",
    description: "Advanced real-world application of Claude Code in production engineering workflows.",
  },
]

const GAP = 20

export function Certifications() {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(360)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = certs.length

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setCardWidth(Math.min(360, containerRef.current.offsetWidth))
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1))

  return (
    <section className="pt-5 pb-5 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">Credentials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Certifications</h2>
            <p className="text-white/40 text-sm mt-2 max-w-md">
              Issued by Anthropic — demonstrating hands-on expertise with Claude AI tools and workflows.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors disabled:opacity-25 disabled:cursor-default"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={current === total - 1}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors disabled:opacity-25 disabled:cursor-default"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current * (cardWidth + GAP)}px))`,
            }}
          >
            {certs.map((cert) => (
              <a
                key={cert.id}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 rounded-2xl overflow-hidden relative block"
                style={{ width: `${cardWidth}px` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] text-indigo-300 border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 rounded-full tracking-wide uppercase">
                    Completed
                  </span>
                </div>

                {/* Body */}
                <div className="bg-white/[0.03] border border-white/10 border-t-0 rounded-b-2xl p-5">
                  <p className="text-[10px] text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    {cert.issuer}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-white/40 text-xs mb-3 leading-relaxed">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      {cert.date && <p className="text-white/30 text-[10px]">Issued {cert.date}</p>}
                      {cert.certNo && <p className="text-white/20 text-[10px]">#{cert.certNo}</p>}
                    </div>
                    <span className="text-xs text-white/50 flex items-center gap-1 group-hover:text-white transition-colors">
                      Verify <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "w-6 bg-indigo-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
