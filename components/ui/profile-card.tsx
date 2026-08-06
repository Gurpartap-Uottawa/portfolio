"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ProfileCardProps {
  name?: string
  title?: string
  description?: string
  imageUrl?: string
  className?: string
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Gurpartap Singh",
    title = "Software Engineer",
    description = "Software engineer with 4+ years of experience building Java/Python backends, React frontends, and SQL-backed data workflows in fast-moving teams.",
    imageUrl = "/ProfileCard.jpg",
    className,
  } = props

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("w-full max-w-xl mx-auto text-center", className)}
    >
      <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-3xl overflow-hidden bg-white/10 mb-6 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white mb-2">
        {name}
      </h1>

      <p className="text-sm font-medium text-white/55 mb-4">{title}</p>

      <p className="text-white/55 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
