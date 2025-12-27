"use client"
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

const roiData = [
  { month: "Jan", roi: 100 },
  { month: "Feb", roi: 140 },
  { month: "Mar", roi: 190 },
  { month: "Apr", roi: 250 },
  { month: "May", roi: 330 },
  { month: "Jun", roi: 400 },
]

export function CaseStudies() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/10 via-zinc-900 to-pink-900/10 p-6 flex flex-col justify-between hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">300% ROI Growth</h3>
        <p className="text-sm text-white/40">See how we helped brands succeed</p>
      </div>

      <div className="flex-1 flex items-center justify-center -mx-6">
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={roiData}>
            <defs>
              <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-zinc-900 border border-white/20 rounded-lg px-3 py-2 shadow-xl">
                      <p className="text-xs text-white/60">{payload[0].payload.month}</p>
                      <p className="text-sm font-semibold text-emerald-400">{payload[0].value}% ROI</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="roi"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#roiGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Shimmer border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />
    </div>
  )
}
