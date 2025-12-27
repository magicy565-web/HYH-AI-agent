"use client"

const partners = ["Amazon", "TikTok", "Shopify", "Alibaba", "Meta", "Google"]

export function PartnersMarquee() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative">
      <div className="h-full flex items-center">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white/40 transition-colors px-4"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" />
    </div>
  )
}
