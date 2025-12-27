"use client"

import React from "react"
import { Star } from "lucide-react"

export const TestimonialCarousel = () => {
  const [current, setCurrent] = React.useState(0)
  const [key, setKey] = React.useState(0)

  const testimonials = [
    {
      text: "团队非常专业，短短三个月就把我们的独立站转化率提升了两倍。从选品建议到广告素材,每一项都超出了预期。",
      author: "Sarah Chen",
      role: "BeautyBrand Co. 创始人",
      tags: ["独立站优化", "ROI翻倍"],
      color: "from-pink-500 to-rose-500",
    },
    {
      text: "GlobalX 的 TikTok 投流策略太强了！我们在黑五期间的 GMV 突破了历史新高，单场直播观看人数翻了 10 倍。",
      author: "David Liu",
      role: "EcoHome 市场总监",
      tags: ["TikTok直播", "爆品打造"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      text: "最让我惊喜的是他们的全球履约能力。解决了我们在欧洲市场的仓储难题，物流时效提升了 40%，客户投诉率几乎归零。",
      author: "Mark Thompson",
      role: "TechGear Supply Chain VP",
      tags: ["全球仓储", "物流时效"],
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "不仅是服务商，更像是合伙人。他们对欧美本土文化的理解非常深刻，帮助我们的品牌完成了从 0 到 1 的质变。",
      author: "Emily Zhang",
      role: "PetJoy 品牌主理人",
      tags: ["品牌全案", "本土化"],
      color: "from-purple-500 to-violet-500",
    },
    {
      text: "非常有耐心的团队，数据报表透明清晰。每一分预算都花在刀刃上，这种精细化运营在跨境行业非常难得。",
      author: "Jessica Lee",
      role: "FitLife 运营总监",
      tags: ["数据透明", "精细化运营"],
      color: "from-orange-500 to-amber-500",
    },
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setKey((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const active = testimonials[current]

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-wide">来自验证客户</span>
        </div>

        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
          <div key={key} className="h-full bg-white/50 rounded-full animate-[progress_5s_linear]" />
        </div>
      </div>

      <div key={key} className="relative animate-[fade-in-up_0.6s_ease-out_forwards]">
        <p className="text-gray-200 italic text-sm md:text-base leading-relaxed mb-4 min-h-[4.5em]">"{active.text}"</p>

        <div className="flex gap-2 mb-4">
          {active.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-white/10 bg-white/5 text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${active.color} border border-white/10 shadow-lg`} />
        <div key={key} className="flex flex-col animate-[fade-in_0.8s_ease-out]">
          <span className="text-white text-sm font-medium leading-none">{active.author}</span>
          <span className="text-[11px] text-gray-500 mt-0.5">{active.role}</span>
        </div>
      </div>
    </div>
  )
}
