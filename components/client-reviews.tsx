"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    text: "Increased our revenue by 300% in just 6 months!",
    author: "Sarah Chen",
    company: "BeautyBrand Co.",
  },
  {
    text: "Best cross-border agency we've worked with. Professional and results-driven.",
    author: "Michael Torres",
    company: "FitGear Inc.",
  },
  {
    text: "They helped us scale to 7 figures. Highly recommend!",
    author: "Lisa Park",
    company: "HomeGoods Pro",
  },
]

export function ClientReviews() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold">Client Reviews</h3>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Scrolling reviews container */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 animate-scroll-reviews">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="mb-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/80 mb-2 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="text-xs text-white/40">
                <span className="font-medium text-white/60">{review.author}</span> • {review.company}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade at top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 blur-xl" />
    </div>
  )
}
