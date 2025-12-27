"use client"

import { Lightbulb, Palette, Megaphone, Truck } from "lucide-react"

const steps = [
  { label: "Strategy", icon: Lightbulb, description: "Market research & planning" },
  { label: "Design", icon: Palette, description: "Brand & store setup" },
  { label: "Ads", icon: Megaphone, description: "Performance marketing" },
  { label: "Logistics", icon: Truck, description: "Fulfillment & shipping" },
]

export function WorkflowCard() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Our Workflow
      </h3>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/20 group-hover/item:border-purple-500/40 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{step.label}</div>
                <div className="text-xs text-white/40 mt-0.5">{step.description}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-[2.375rem] mt-[3.25rem] w-px h-4 bg-white/10" />
              )}
            </div>
          )
        })}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-purple-500/5 to-transparent blur-xl" />
    </div>
  )
}
