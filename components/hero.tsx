"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="h-full relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 via-zinc-900 to-blue-900/20 p-8 flex flex-col justify-between group hover:border-white/30 hover:scale-[1.02] transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm animate-border-beam" />
      </div>

      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse opacity-50" />

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-4">
          ✨ Trusted by Leading Brands
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent leading-tight">
          Global Brand Scaling
        </h1>

        <p className="text-lg text-white/60 mb-8 max-w-lg">We build 7-figure Shopify stores.</p>
      </div>

      <div className="relative z-10 flex gap-4">
        {/* Updated "Get Started" button to "Book a Call" with shimmer effect */}
        <Button className="bg-white text-black hover:bg-white/90 rounded-xl group/btn relative overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-button" />
        </Button>

        <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl bg-transparent">
          Learn More
        </Button>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-xl" />
    </div>
  )
}
