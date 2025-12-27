"use client"

import React from "react"

export const FeatureCarousel = () => {
  const FEATURES = [
    {
      id: 0,
      title: "TikTok 兴趣电商",
      en: "SOCIAL COMMERCE",
      desc: "从内容创作到直播带货，构建全链路社媒营销闭环。单场直播 GMV 突破百万英镑，打造现象级爆品。",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-Z5i7JBZa22niZvtZkVeEeK8MQIsESc.mp4",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 1,
      title: "数字化供应链",
      en: "DIGITAL SUPPLY CHAIN",
      desc: "依托全球 160万+ 平方米自营海外仓，实现库存实时可视化管理与本土极速配送，降低 30% 物流成本。",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supply_chain-TBVMgSCz8ZfeM0iwPEdXBgtFLTNShm.mp4",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "品牌全案孵化",
      en: "BRAND INCUBATION",
      desc: "从顶层策略到视觉升级，赋能工厂型企业转型 DTC 品牌。提供从 0 到 1 的全案咨询与独立站陪跑。",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand-bYsG7iTsX6mKAAjUMA7lizrcNVldSH.mp4",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-black group">
      {FEATURES.map((feature, index) => (
        <div
          key={feature.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-105">
            <source src={feature.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <div className="relative h-[120px]">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className={`absolute bottom-0 left-0 w-full transition-all duration-700 transform ${
                index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  {index === 0 && (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none">{feature.title}</h3>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1">{feature.en}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          {FEATURES.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-linear"
                style={{
                  width: index === activeIndex ? "100%" : "0%",
                  transitionDuration: index === activeIndex ? "6000ms" : "0ms",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </div>
  )
}
