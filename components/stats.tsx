"use client"

import { DollarSign } from "lucide-react"

export function Stats() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 p-6 flex flex-col justify-center hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <DollarSign className="w-5 h-5 text-green-400" />
      </div>

      <div className="space-y-2">
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          $50M+
        </div>
        <div className="text-base text-white/60 font-medium">GMV Managed</div>
        <div className="text-sm text-white/40">Gross Merchandise Value</div>
      </div>

      {/* Animated pulse effect */}
      <div className="absolute bottom-6 left-6 right-6 h-1 bg-gradient-to-r from-green-500/20 via-green-400/40 to-green-500/20 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse-slide" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/5 to-transparent blur-xl" />
    </div>
  )
}
