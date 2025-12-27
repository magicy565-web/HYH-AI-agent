"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"

export const InsightCarousel = () => {
  const INSIGHTS = [
    {
      id: 0,
      type: "image" as const,
      src: "/images/2026-whitepaper.jpg",
      tag: "2026 Q1 趋势报告",
      title: "2026年 欧美 DTC\n爆品赛道洞察白皮书",
      desc: "深度解析 TikTok Shop 全托管模式下的新机遇，揭秘 3 个高增长细分领域与选品逻辑。",
      bgStyle: "bg-purple-900/20",
      themeColor: "purple" as const,
    },
    {
      id: 1,
      type: "video" as const,
      src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-12502-large.mp4",
      tag: "市场动态",
      title: "研究趋势",
      desc: "了解最近欧美的市场趋势动态，掌握第一手消费风向标。",
      bgStyle: "bg-blue-900/20",
      themeColor: "blue" as const,
    },
    {
      id: 2,
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
      tag: "采购需求",
      title: "B2B 采购线索",
      desc: "洞察全球 B2B 采购线索，了解最新的采购需求动态与大宗订单机会。",
      bgStyle: "bg-emerald-900/20",
      themeColor: "emerald" as const,
    },
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INSIGHTS.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const currentTheme = INSIGHTS[activeIndex].themeColor

  return (
    <div className="col-span-1 row-span-2 relative h-full min-h-[400px] group">
      <div
        className={`absolute inset-0 rounded-[32px] border transition-all duration-1000 z-0
          ${currentTheme === "purple" ? "border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]" : ""}
          ${currentTheme === "blue" ? "border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]" : ""}
          ${currentTheme === "emerald" ? "border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]" : ""}
          animate-[breathe_4s_ease-in-out_infinite]
        `}
      ></div>

      <div className="absolute inset-0 rounded-[32px] bg-black/40 backdrop-blur-xl overflow-hidden flex flex-col z-10">
        <div className="flex justify-between items-center px-6 pt-6 mb-2 relative z-30">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-1000
              ${currentTheme === "purple" ? "bg-purple-500" : ""}
              ${currentTheme === "blue" ? "bg-blue-500" : ""}
              ${currentTheme === "emerald" ? "bg-emerald-500" : ""}
            `}
            ></div>
            <h3 className="text-sm font-bold text-gray-200">前沿商机研究</h3>
          </div>
          <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
        </div>

        {INSIGHTS.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col justify-end ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 top-[60px] m-4 rounded-2xl overflow-hidden border border-white/5">
              <div className={`absolute inset-0 ${item.bgStyle} opacity-50 transition-colors duration-1000`}></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 mix-blend-screen scale-110"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-[10s]"
                  style={{ backgroundImage: `url(${item.src})` }}
                ></div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
            </div>

            <div className="relative z-20 px-8 pb-8 pt-4">
              <div
                className={`inline-block px-2 py-1 bg-white/10 border border-white/10 rounded text-[10px] backdrop-blur-md mb-3 transition-colors duration-1000
                 ${item.themeColor === "purple" ? "text-purple-300" : ""}
                 ${item.themeColor === "blue" ? "text-blue-300" : ""}
                 ${item.themeColor === "emerald" ? "text-emerald-300" : ""}
               `}
              >
                ▋ {item.tag}
              </div>

              <h4 className="text-2xl font-bold text-white mb-2 leading-tight whitespace-pre-line animate-[fade-in-up_0.5s_ease-out]">
                {item.title}
              </h4>

              <p className="text-xs text-gray-400 line-clamp-2 h-8 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 flex z-30">
          {INSIGHTS.map((item, index) => (
            <div key={index} className="flex-1 h-full relative border-r border-black/20">
              <div
                className={`absolute top-0 left-0 h-full transition-all ease-linear
                   ${item.themeColor === "purple" ? "bg-purple-500" : ""}
                   ${item.themeColor === "blue" ? "bg-blue-500" : ""}
                   ${item.themeColor === "emerald" ? "bg-emerald-500" : ""}
                 `}
                style={{
                  width: index === activeIndex ? "100%" : "0%",
                  transitionDuration: index === activeIndex ? "10000ms" : "0ms",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
