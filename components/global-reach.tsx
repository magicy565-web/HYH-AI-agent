"use client"

import { Globe } from "lucide-react"

export function GlobalReach() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 p-6 flex flex-col items-center justify-center hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      {/* Minimalist map/globe graphic */}
      <div className="relative w-32 h-32">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />

        {/* Middle ring */}
        <div className="absolute inset-4 rounded-full border-2 border-white/10 border-dashed animate-spin-slow" />

        {/* Inner globe */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center">
          <Globe className="w-10 h-10 text-white/80" />
        </div>

        {/* Connection dots */}
        <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-purple-400 animate-ping delay-300" />
        <div className="absolute top-1/2 right-2 w-2 h-2 rounded-full bg-green-400 animate-ping delay-700" />
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold">Global Reach</h3>
        <p className="text-sm text-white/40 mt-1">50+ Countries</p>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl" />
    </div>
  )
}
