"use client"

import { Users } from "lucide-react"

export function TeamProfile() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/10 to-zinc-900 p-6 flex flex-col justify-between hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      {/* Profile image placeholder */}
      <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/5">
        <Users className="w-12 h-12 text-white/40" />
      </div>

      <div className="mt-4">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400">
          Expert Team
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl" />
    </div>
  )
}
