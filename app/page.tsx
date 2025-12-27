"use client"

import {
  ArrowRight,
  TrendingUp,
  Package,
  Lightbulb,
  MonitorPlay,
  Star,
  Globe,
  X,
  ArrowUpRight,
  MapPin,
  BarChart3,
  Clock,
} from "lucide-react"
import * as React from "react"

// ✨ 通用滚动揭示组件 (Scroll Reveal)
import { ScrollReveal } from "@/components/scroll-reveal"
// import { TestimonialCarousel } from "@/components/testimonial-carousel" // Commented out as it's redeclared below
// import { FeatureCarousel } from "@/components/feature-carousel" // Commented out as it's redeclared below
// import { InsightCarousel } from "@/components/insight-carousel" // Commented out as it's redeclared below
// import { VideoHero } from "@/components/video-hero" // Commented out as it's redeclared below

// ✨ 1. 定义计数器组件 (放在 Home 函数外面)
// They are now imported from separate files

const TestimonialCarousel = () => {
  const [current, setCurrent] = React.useState(0)
  const [key, setKey] = React.useState(0)

  const testimonials = [
    {
      text: "团队非常专业，短短三个月就把我们的独立站转化率提升了两倍。从选品建议到广告素材，每一项都超出了预期。",
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

// ✨ 3. 服务能力轮播组件 (GIF背景版)
const FeatureCarousel = () => {
  // 定义轮播内容数据
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
      desc: "依托全球 160万+ 平方米自营海外仓，实现库存实时可视化管理与本土极速recommendet，降低 30% 物流成本。",
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

  // 自动轮播逻辑 (每6秒切换)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-black group">
      {/* 1. 视频层 (使用绝对定位叠加，通过 opacity 实现淡入淡出) */}
      {FEATURES.map((feature, index) => (
        <div
          key={feature.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* 视频背景 */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-105">
            <source src={feature.video} type="video/mp4" />
          </video>

          {/* 渐变遮罩 (保证文字清晰) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      ))}

      {/* 2. 内容层 (始终置顶 z-20) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        {/* 动态文本内容 */}
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

        {/* 3. 底部进度条指示器 */}
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

      {/* 右上角箭头 (装饰) */}
      <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </div>
  )
}

const DARA_CASE_DATA = {
  id: "dara",
  title: "Dá'ra Jewelry",
  subtitle: '90天攻克英国红海市场，构建"旗舰店+DTC"信任闭环',
  tags: ["珠宝品类", "品牌全案", "英国市场"],
  stats: [
    { label: "GMV", value: "£450,000" },
    { label: "销量增长", value: "525%" },
    { label: "欧洲排名", value: "Top 5" },
  ],
  content: (
    <div className="space-y-8 text-gray-300 leading-relaxed">
      {/* 前言 */}
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
        <p>
          "在时尚银饰与淡水珍珠这一高度饱和的'红海'赛道，Dá'ra
          珠宝作为新晋跨境品牌，如何在短短三个月内攻克'跨境信任'这一核心痛点，实现 £450,000 GMV 并跻身赛道 Top 5？"
        </p>
      </div>

      {/* 1.0 战略总览 */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-500">1.0</span> 战略总览：构建跨境信任
        </h3>
        <p className="mb-4">
          Dá'ra
          珠宝品牌在进入英国市场之初，即面临一个高度饱和的竞争环境。对于一个新晋的跨境品牌而言，最大的挑战并非产品本身，而是如何在一个成熟市场中快速解决"跨境信任"这一核心痛点。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#111] p-4 rounded-xl border border-white/5">
            <div className="text-yellow-500 font-bold mb-1">财务目标</div>
            <div className="text-xs">3个月启动期内实现 £450,000 GMV。</div>
          </div>
          <div className="bg-[#111] p-4 rounded-xl border border-white/5">
            <div className="text-yellow-500 font-bold mb-1">品牌目标</div>
            <div className="text-xs">建立"正规军"形象，显著区隔于传统跨境卖家。</div>
          </div>
          <div className="bg-[#111] p-4 rounded-xl border border-white/5">
            <div className="text-yellow-500 font-bold mb-1">市场目标</div>
            <div className="text-xs">验证全渠道闭环模式，跻身欧洲时尚珠宝品牌 Top 5。</div>
          </div>
        </div>
        <p className="text-sm text-gray-400">铁三角收入结构：DTC (50%) + 伦敦旗舰店 (25%) + DPP (25%)</p>
      </section>

      {/* 2.0 核心战略 */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-500">2.0</span> 核心战略支柱：全渠道闭环
        </h3>
        <ul className="space-y-6">
          <li className="pl-4 border-l-2 border-yellow-500/50">
            <strong className="text-white block mb-1">2.1 品牌锚点：伦敦旗舰店的"现实扭曲力场"</strong>
            <p className="text-sm">
              门店不仅是销售场所，更是高效的"内容工厂"。通过 "Founders' Night" 和 "Pearl Week" 吸引 600+
              KOL，现场转化率高达 30-35%。
            </p>
          </li>
          <li className="pl-4 border-l-2 border-yellow-500/50">
            <strong className="text-white block mb-1">2.2 流量承接：DTC 渠道的高效运营</strong>
            <p className="text-sm">
              利用源自旗舰店的专业素材为 TikTok Shop 提供燃料。凭借 50% (£225k) 的收入贡献，DTC 渠道将品牌声量高效变现。
            </p>
          </li>
          <li className="pl-4 border-l-2 border-yellow-500/50">
            <strong className="text-white block mb-1">2.3 市场渗透：DPP 网络的渠道扩张</strong>
            <p className="text-sm">
              采取广触达、低门槛的"长尾"模式。高达 98% 的履约率（Fill Rate）证明了该渠道的稳定性。
            </p>
          </li>
        </ul>
      </section>

      {/* 3.0 运营护城河 */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-500">3.0</span> 运营护城河：构建壁垒
        </h3>
        <div className="space-y-4">
          <div className="bg-[#1A1A1A] p-4 rounded-xl">
            <h4 className="text-white font-bold mb-2">3.1 私域 SOP</h4>
            <p className="text-sm">
              从预约导入到 1:1 直播鉴赏 (Book Live)，将 12 个月复购率（RPR-12）提升至 25% 以上。
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-4 rounded-xl">
            <h4 className="text-white font-bold mb-2">3.2 合规壁垒</h4>
            <p className="text-sm">
              严格遵守 Hallmarking (贵金属检验) 及 REACH 质检，向消费者传递"我们是正规军"的核心信息。
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 成果 */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-500">4.0</span> 战役成果
        </h3>
        <p className="mb-4">经过三个月的精密布局，Dá'ra 成功实现了 £450,000 的 GMV 目标。</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
          <li>
            <span className="text-white">线上：</span>每周产生 200+ 条高质量 UGC。
          </li>
          <li>
            <span className="text-white">线下：</span>旗舰店活动出席率超 70%。
          </li>
          <li>
            <span className="text-white">分销：</span>98% 订单履约率，服务稳定可靠。
          </li>
        </ul>
      </section>

      {/* 5.0 总结 */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">💡 核心洞察</h3>
        <p className="mb-4">
          Dá'ra 的成功证明，出海已告别"廉价倾销"时代。实体先行锚定信任，合规即营销，设计渠道合力，私域深耕价值长存。
        </p>
      </div>
    </div>
  ),
}

const CaseModal = ({
  isOpen,
  onClose,
  data,
}: { isOpen: boolean; onClose: () => void; data: typeof DARA_CASE_DATA | null }) => {
  if (!isOpen || !data) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* 背景遮罩 (点击关闭) */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-[fade-in_0.3s]"
        onClick={onClose}
      ></div>

      {/* 内容卡片 */}
      <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-[scale-up_0.3s_ease-out]">
        {/* 顶部：封面与标题 */}
        <div className="relative shrink-0 h-48 sm:h-64 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>

          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10 z-50 backdrop-blur-md"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex gap-2 mb-3">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-bold rounded-full backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{data.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base line-clamp-2">{data.subtitle}</p>
          </div>
        </div>

        {/* 中间：滚动内容区 */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10">
          {/* 核心数据栏 */}
          <div className="flex flex-wrap gap-4 mb-10 pb-8 border-b border-white/10">
            {data.stats.map((stat, i) => (
              <div key={i} className="flex-1 min-w-[100px] bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 正文内容 */}
          {data.content}
        </div>

        {/* 底部：固定栏 */}
        <div className="shrink-0 p-4 border-t border-white/10 bg-[#0A0A0A] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
          >
            关闭
          </button>
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold hover:brightness-110 transition-all text-sm shadow-lg shadow-yellow-500/20">
            咨询类似全案
          </button>
        </div>
      </div>
    </div>
  )
}

// 🎬 全屏视频英雄组件 (Cinematic Video Hero - 带背景动效)
const VideoHero = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <>
      {/* 1. 默认状态：待机循环视频卡片 (带低饱和度动效背景) */}
      <div
        className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl mt-12 mb-8"
        onClick={() => setIsPlaying(true)}
      >
        {/* === ✨ 新增：背景循环视频层 (模拟 GIF) === */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 saturate-[.7] group-hover:scale-110 transition-transform duration-[3s] ease-out"
          >
            {/* 这是一个高质量的科技感地球网络连接视频素材 */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-global-hightech-network-connections-surface-20584-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* 叠加层1：深色渐变遮罩 (保证文字清晰度) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/20 mix-blend-multiply" />

          {/* 叠加层2：全息噪点纹理 (增加质感) */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        {/* === 内容层：居中播放按钮与文案 (z-index: 10 确保在视频之上) === */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
          {/* 播放按钮 (带脉冲光效) */}
          <div className="relative group/btn mb-8">
            {/* 扩散波纹动画 */}
            <div className="absolute inset-0 -m-4 bg-blue-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000 delay-100"></div>
            <div className="absolute inset-0 -m-2 bg-purple-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000"></div>

            {/* 按钮主体 */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative z-20">
              {/* Play Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white translate-x-1 group-hover/btn:text-purple-100 transition-colors"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* 标题文案 */}
          <div className="space-y-4 animate-[fade-in-up_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md mb-2 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              集团宣传视频
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
              助力出海{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                无限梦想
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto leading-relaxed opacity-90 font-medium drop-shadow">
              3分钟了解 鸿亿鸿 如何通过全链路数字化方案，助力中国品牌出海，实现从 0 到 1 的业务增长
            </p>
          </div>
        </div>

        {/* 底部装饰光条 */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>
      </div>

      {/* 2. 交互状态：全屏播放模态框 (保持不变) */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-4 md:p-10 animate-[fade-in_0.3s]">
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-50 group"
          >
            {/* Close Icon (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:rotate-90 transition-transform duration-300"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* 视频容器 */}
          <div className="relative w-full max-w-6xl aspect-video bg-[#0A0A0A] rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-[scale-up_0.4s_ease-out]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oRZlmIwmVLg?autoplay=1&rel=0&modestbranding=1&color=white"
              title="Brand Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

// Helper component for BrandLogo (undeclared)
const BrandLogo = () => (
  <div className="flex items-center gap-2">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1%20%283%29-bckNb7BX2QfuFiwTEuSFInNk7DpDzW.png" alt="鸟IZ鸟 Logo" className="h-12 w-auto object-contain" />
  </div>
)

// Helper component for ServiceCarousel (undeclared)
const ServiceCarousel = FeatureCarousel

// Helper component for FaqItem (undeclared)
const FaqItem = ({
  question,
  answer,
  delay = 0,
}: {
  question: string
  answer: string
  delay?: number
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="bg-white/5 rounded-xl border border-white/10 p-6 mb-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">{question}</h3>
          <ArrowRight
            size={18}
            className={`text-gray-500 transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-90"}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="px-6 text-sm text-gray-400 leading-relaxed animate-[fade-in_0.5s_ease-out]">{answer}</div>
      )}
    </div>
  )
}

export default function Home() {
  const [activeCase, setActiveCase] = React.useState<typeof DARA_CASE_DATA | null>(null)

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* 1. Subtle noise texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* 2. Static ambient lights - purple and blue glows */}
      <div className="fixed top-[-10%] left-[-20%] w-[700px] h-[700px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Very subtle grid texture for depth */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* ==================== 📱 顶栏导航 ==================== */}
      <header className="flex justify-between items-center py-2 px-1 mb-4 relative z-20">
        <div className="flex items-center gap-3">
          <BrandLogo />
        </div>
        <button className="px-5 py-2 text-xs font-medium bg-[#1A1A1A]/80 backdrop-blur-md hover:bg-[#252525] border border-white/10 rounded-full transition-all text-gray-300 hover:scale-105 active:scale-95 shadow-lg">
          <span className="group-hover:text-white transition-colors">联系我们要案</span>
        </button>
      </header>

      {/* BENTO GRID 核心布局 */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[auto]">
          {/* 1. 主视觉卡片 (左上 - 2x2) - 修复流光边框 */}
          <div className="group col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-[32px] bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-white/10">
            {/* ✨ 修复动效：流光边框 (Border Beam) */}
            <div className="absolute inset-0 pointer-events-none rounded-[32px] border border-transparent [mask-clip:padding-box,border-box] after:absolute after:inset-[-2px] after:rounded-[32px] after:bg-[conic-gradient(from_var(--bg-angle),transparent_20%,#3b82f6_50%,transparent_80%)] animate-border-beam opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 顶部标签 - 修复呼吸灯 */}
            <div className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333] text-yellow-500 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                2025年英国TOP出海服务Agency
              </div>
            </div>

            {/* 主标题与副标题 */}
            <div className="space-y-4 z-10">
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                品牌出海 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
                  全球增长引擎
                </span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                我们要做的不仅是卖货，而是通过全案咨询与独立站孵化，打造下一个百万级 DTC 品牌。
              </p>
            </div>

            {/* 按钮组 */}
            <div className="flex gap-4 mt-8 z-10">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95">
                开启品牌出海{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="px-6 py-3 bg-[#1A1A1A] border border-white/10 text-gray-300 rounded-full font-medium text-sm hover:bg-[#252525] transition-colors hover:scale-105">
                了解出海政策
              </button>
            </div>

            {/* 背景装饰光 */}
            <div className="absolute right-[-50px] bottom-[-50px] w-[300px] h-[300px] bg-gradient-to-tl from-blue-900/20 to-transparent rounded-full blur-3xl" />
          </div>

          {/* 2. 全案流程 (能量导管风格) */}
          <div className="col-span-1 row-span-2 rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col relative overflow-hidden group shadow-xl">
            {/* 装饰：背景微弱的电路纹理 */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            {/* 顶部标题区 */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 box-shadow-[0_0_10px_#22c55e]"></span>
                </div>
                <h3 className="text-sm font-bold text-gray-100 tracking-wide uppercase">全案策划服务流程</h3>
              </div>
              <div className="text-[10px] font-mono text-green-500/50 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/10">
                Process
              </div>
            </div>

            {/* 流程容器 */}
            <div className="flex-1 relative flex flex-col justify-between pl-2">
              {/* === 核心：能量光束导管 === */}
              {/* 导轨背景 */}
              <div className="absolute left-[24px] top-4 bottom-8 w-[2px] bg-white/5 rounded-full overflow-hidden">
                {/* 脉冲光束：高亮的能量条从上往下流动 */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-green-400 to-transparent blur-[2px] animate-[beam-flow_3s_cubic-bezier(0.4,0,0.2,1)_infinite]"></div>
              </div>

              {/* 步骤列表 */}
              {[
                { id: "01", icon: <Lightbulb size={20} />, title: "顶层策略", desc: "Strategy & Selection" },
                { id: "02", icon: <MonitorPlay size={20} />, title: "视觉升级", desc: "Visual Identity" },
                { id: "03", icon: <TrendingUp size={20} />, title: "精准投流", desc: "Traffic Acquisition" },
                { id: "04", icon: <Package size={20} />, title: "全球履约", desc: "Global Fulfillment" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex items-center gap-5 group/step cursor-default p-2 -ml-2 rounded-xl transition-all duration-300 hover:bg-white/5 hover:translate-x-1"
                >
                  {/* 背景巨型数字 (增加视觉深度) */}
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-6xl font-black text-white/[0.02] group-hover/step:text-white/[0.05] transition-colors select-none font-sans italic">
                    {item.id}
                  </span>

                  {/* 图标节点 (玻璃透镜风格) */}
                  <div className="relative w-12 h-12 shrink-0">
                    {/* 激活光晕 */}
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-0 group-hover/step:opacity-40 transition-opacity duration-300"></div>
                    {/* 实体按钮 */}
                    <div className="relative w-full h-full rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-gray-500 shadow-inner group-hover/step:text-white group-hover/step:border-green-500/50 group-hover/step:shadow-[inset_0_0_10px_rgba(34,197,94,0.2)] transition-all duration-300 z-10">
                      {item.icon}
                    </div>
                    {/* 连接点装饰 */}
                    <div className="absolute top-1/2 -left-[9px] -translate-y-1/2 w-2 h-[2px] bg-white/10 group-hover/step:bg-green-500/50 transition-colors"></div>
                  </div>

                  {/* 文字内容 */}
                  <div className="relative z-10">
                    <div className="text-base font-bold text-gray-300 group-hover/step:text-green-400 transition-colors duration-300 flex items-center gap-2">
                      {item.title}
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-2 group-hover/step:opacity-100 group-hover/step:translate-x-0 transition-all duration-300 text-green-500"
                      />
                    </div>
                    <div className="text-[10px] text-gray-600 font-mono group-hover/step:text-gray-400 transition-colors duration-300 uppercase tracking-wider">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 前沿商机研究 (右上 - 图文混合/研报风格) */}
          <InsightCarousel />

          {/* 4. 解决方案 (全息传送门风格) */}
          <div className="col-span-1 rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl p-4 flex flex-col gap-3 shadow-xl relative group overflow-hidden">
            {/* 欧盟传送门 (EU Portal) */}
            <div className="flex-1 relative rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]/20 border border-blue-500/20 overflow-hidden group/eu cursor-pointer hover:border-blue-400/50 transition-all duration-300">
              {/* 背景：抽象地图纹理 */}
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg')] bg-cover bg-center opacity-10 group-hover/eu:opacity-30 group-hover/eu:scale-110 transition-all duration-500 grayscale mix-blend-screen"></div>
              {/* 悬停光晕 */}
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/eu:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 h-full flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover/eu:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-shadow">
                    <span className="text-sm font-bold">EU</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-100 group-hover/eu:text-blue-300 transition-colors">
                      欧盟全案
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono tracking-wider">MARKET ACCESS</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-blue-500/50 group-hover/eu:text-blue-400 group-hover/eu:translate-x-1 group-hover/eu:-translate-y-1 transition-transform"
                />
              </div>
            </div>

            {/* 北美传送门 (US Portal) */}
            <div className="flex-1 relative rounded-2xl bg-gradient-to-br from-[#1c1917] to-[#581c87]/20 border border-purple-500/20 overflow-hidden group/us cursor-pointer hover:border-purple-400/50 transition-all duration-300">
              {/* 背景：抽象地图纹理 */}
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/43/Location_North_America.svg')] bg-cover bg-center opacity-10 group-hover/us:opacity-30 group-hover/us:scale-110 transition-all duration-500 grayscale mix-blend-screen"></div>
              <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover/us:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 h-full flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(147,51,234,0.2)] group-hover/us:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-shadow">
                    <span className="text-sm font-bold">US</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-100 group-hover/us:text-purple-300 transition-colors">
                      北美全案
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono tracking-wider">MARKET ACCESS</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-purple-500/50 group-hover/us:text-purple-400 group-hover/us:translate-x-1 group-hover/us:-translate-y-1 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* 5. 核心数据 (实时仪表盘风格) */}
          <div className="col-span-1 rounded-[32px] border border-white/10 bg-[#050505] p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            {/* 装饰：背景精密网格 */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* 头部：客户总数 */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Live Metrics</span>
                </div>
                <ArrowUpRight size={14} className="text-gray-600" />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white tracking-tighter">589</span>
                <span className="text-sm text-gray-500 font-medium">Active Clients</span>
              </div>
            </div>

            {/* 底部：交易额可视化对比 */}
            <div className="relative z-10 space-y-3 mt-4">
              {/* 线上数据条 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Online GMV</span>
                  <span className="text-green-400 font-mono font-bold">$1.9B</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[30%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                </div>
              </div>

              {/* 线下数据条 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Offline Volume</span>
                  <span className="text-blue-400 font-mono font-bold">$8.7B</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                </div>
              </div>

              <div className="text-[9px] text-gray-600 text-right font-mono pt-1">
                Last updated: <span className="text-gray-500">Dec 22, 2025</span>
              </div>
            </div>
          </div>

          {/* 6. 客户评价轮播 (右下 - 5秒自动轮播 + 文字动效) */}
          <div className="col-span-1 md:col-span-2 row-span-1 rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-colors">
            <TestimonialCarousel />

            <div className="absolute top-4 right-6 opacity-10 pointer-events-none">
              <span className="text-6xl font-serif text-white">"</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <VideoHero />
      </ScrollReveal>

      {/* 新增部分：精选成功案例和全球基础设施 */}
      <ScrollReveal>
        <div className="w-full mt-8 space-y-4">
          {/* 标题栏 */}
          <div className="flex items-center justify-between px-2 pt-8 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              精选成功案例 <span className="text-gray-500 text-sm font-normal ml-2">Selected Case Studies</span>
            </h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              查看全部 <ArrowRight size={14} />
            </button>
          </div>

          {/* 案例卡片组 (4列布局 - 完美复刻参考图) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Dá'ra Jewelry (保留案例 - 珠宝) */}
            <div
              className="group relative h-[320px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden cursor-pointer"
              onClick={() => setActiveCase(DARA_CASE_DATA)}
            >
              {/* 背景图 */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              {/* 内容区 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* 标签行 */}
                <div className="flex gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    珠宝品类
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/10 text-gray-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    品牌全案
                  </span>
                </div>

                {/* 标题与描述 */}
                <h3 className="text-xl font-bold text-white mb-2">Dá'ra Jewelry</h3>
                <p className="text-xs text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed">
                  重塑品牌视觉体系与独立站体验，成功打入欧美高定珠宝圈层，实现高客单价突破。
                </p>

                {/* 数据栏 */}
                <div className="flex items-center gap-6 border-t border-white/10 pt-3">
                  <div>
                    <div className="text-lg font-bold text-white font-mono">525%</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">销量增长</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">£450K</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">GMV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. OptiBac Probiotics (PDF案例 - 益生菌) */}
            <div className="group relative h-[320px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    大健康
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/10 text-gray-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    官方分销
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">OptiBac</h3>
                <p className="text-xs text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed">
                  协助英国推荐品牌 No.1 完成中国一般贸易合规准入，实现全渠道官方投放落地。
                </p>
                <div className="flex items-center gap-6 border-t border-white/10 pt-3">
                  <div>
                    <div className="text-lg font-bold text-white font-mono">No.1</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">英国推荐品牌</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">100%</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">合规准入</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. USN Nutrition (PDF案例 - 运动营养) */}
            <div className="group relative h-[320px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    运动营养
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/10 text-gray-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    独家总代
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">USN Nutrition</h3>
                <p className="text-xs text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed">
                  作为中国市场独家总代，助力全球增长最快的运动营养品牌实现全渠道销量爆发。
                </p>
                <div className="flex items-center gap-6 border-t border-white/10 pt-3">
                  <div>
                    <div className="text-lg font-bold text-white font-mono">Top 3</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">类目份额</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">50+</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">分销渠道</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Simplot / John West (PDF案例 - 高端食品) */}
            <div className="group relative h-[320px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=2041&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-green-500/20 border border-green-500/30 text-green-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    高端食品
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/10 text-gray-300 text-[10px] font-medium rounded-md backdrop-blur-md">
                    影视植入
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Simplot</h3>
                <p className="text-xs text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed">
                  成功将 John West 品牌植入热门电影《我是你妈》，实现品牌声量与销量的双重引爆。
                </p>
                <div className="flex items-center gap-6 border-t border-white/10 pt-3">
                  <div>
                    <div className="text-lg font-bold text-white font-mono">10M+</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">品牌曝光</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">2017</div>
                    <div className="text-[9px] text-gray-500 mt-0.5">建立合作</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 🌍 全球基建 (全息指挥屏版) ==================== */}

          <div className="relative w-full rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 overflow-hidden group shadow-2xl mt-16 mb-16">
            {/* 1. 动态背景层：全息数字地图 */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-[40px]">
              {/* 抽象地图纹理 (低透明度叠加) */}
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center opacity-[0.08] mix-blend-screen invert filter grayscale contrast-150"></div>
              {/* 氛围光晕 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-green-900/20 mix-blend-color-dodge"></div>

              {/* 核心节点呼吸光点 (模拟全球布局) */}
              {/* 北美节点 */}
              <div className="absolute top-[32%] left-[22%]">
                <span className="animate-[ping_3s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              </div>
              {/* 欧洲节点 */}
              <div className="absolute top-[28%] left-[49%]">
                <span className="animate-[ping_3s_ease-in-out_infinite_1s] absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              </div>
              {/* 东南亚/中国节点 */}
              <div className="absolute top-[45%] left-[74%]">
                <span className="animate-[ping_3s_ease-in-out_infinite_2s] absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></span>
              </div>
            </div>

            {/* 2. 内容层 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* 顶部标签 */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-xs font-medium text-blue-300 backdrop-blur-md mb-6 shadow-lg">
                <Globe size={14} className="animate-pulse" />
                Global Infrastructure
              </div>

              {/* 主标题 */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                欧美自营海外仓{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 font-mono font-extrabold">
                  160万+ m²
                </span>
              </h2>

              {/* 描述文本 */}
              <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-12">
                布局北美、欧洲、核心枢纽，提供一件代发、退换货处理及 FBA
                中转服务。助力品牌打破物流壁垒，实现本土化极速履约。
              </p>

              {/* 3. 核心数据模块 (仪表盘风格) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-[fade-in-up_0.5s_ease-out_0.2s]">
                {/* 数据 1: 节点 */}
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all group/stat">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/stat:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white font-mono mb-1">200+</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">全球仓库节点</div>
                </div>

                {/* 数据 2: 准确率 */}
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-green-500/30 transition-all group/stat">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-300 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)] group-hover/stat:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white font-mono mb-1">99.9%</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">库存准确率</div>
                </div>

                {/* 数据 3: 时效 */}
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all group/stat">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/stat:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white font-mono mb-1">24h</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">订单处理时效</div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 🇨🇳 双栏布局：国内地图(左) + 服务轮播(右) ==================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* === 左侧：国内战略布局 (1/2 宽度) === */}
            <div className="relative w-full rounded-[32px] border border-white/10 bg-[#0A0A0A] p-6 flex flex-col overflow-hidden group min-h-[400px]">
              <div className="mb-6 z-10 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white">国内战略布局</h2>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-xl font-bold text-white">
                      7 <span className="text-xs text-gray-500 font-normal">城</span>
                    </div>
                    <div className="text-xl font-bold text-white">
                      24h <span className="text-xs text-gray-500 font-normal">流转</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  以<span className="text-white font-bold">杭州总部</span>
                  为核心，辐射长三角与珠三角，在义乌、深圳设立直营分公司。
                </p>
              </div>

              <div className="relative w-full flex-1 bg-[#111] rounded-2xl border border-white/5 overflow-hidden mt-auto min-h-[260px]">
                <img
                  src="/images/china-offices-gallery.jpg"
                  alt="国内战略布局 - 7城办公室分布"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* === 右侧：服务能力轮播 (1/2 宽度 - GIF背景) === */}
            <div className="relative w-full rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden group h-full min-h-[400px]">
              <ServiceCarousel />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ==================== 🦸‍♂️ 新增：核心专家团队 (The Elite Squad) ==================== */}

      <ScrollReveal>
        <div className="w-full mt-20 mb-16 relative z-10">
          {/* 标题栏 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-2">
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </div>
                核心专家团队
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                汇聚 20年+ 国际贸易经验操盘手、清华 EMBA 战略专家及上市公司顶层买手。
                我们不是普通的代理，而是您品牌出海的<span className="text-indigo-400">战术指挥官</span>。
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs text-gray-500">团队规模</div>
            </div>
          </div>

          {/* 专家卡片网格 (4列布局) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Chairman: Matt (基于PDF: 20年国贸, 清华EMBA) */}
            <div className="group relative h-[400px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer">
              <div className="absolute inset-0 bg-[url('/images/chairman.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"></div>
              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* 底部信息区 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold backdrop-blur-md">
                    STRATEGY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-0.5">Matt</h3>
                <p className="text-xs text-gray-400 font-mono mb-4">董事长 / Chairman</p>

                {/* 隐藏的详细履历 (悬停显示) */}
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="pt-3 border-t border-white/20 space-y-2">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      • 20年国际贸易与兴趣电商经验
                      <br />• 清华大学经济管理学院 EMBA
                      <br />• 上海交通大学客座教授
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CMO: Sky (基于PDF: 20年国贸+5年互联网, Dulcebe创始人) */}
            <div className="group relative h-[400px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer">
              <div className="absolute inset-0 bg-[url('/images/CMO.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold backdrop-blur-md">
                    MARKETING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-0.5">Sky</h3>
                <p className="text-xs text-gray-400 font-mono mb-4">首席营销官 / CMO</p>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="pt-3 border-t border-white/20 space-y-2">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      • 20年国贸+5年互联网操盘经验
                      <br />• Dulcebe 品牌创始人
                      <br />• 擅长全球流量布局与品牌声量打造
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CPO: Echo (基于PDF: 上市公司Top买手, 供应链负责人) */}
            <div className="group relative h-[400px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer">
              {/* 女性高管图 */}
              <div className="absolute inset-0 bg-[url('/images/CPO.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-green-500/20 border border-green-500/30 text-green-300 text-[10px] font-bold backdrop-blur-md">
                    SUPPLY CHAIN
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-0.5">Echo</h3>
                <p className="text-xs text-gray-400 font-mono mb-4">首席产品官 / CPO</p>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="pt-3 border-t border-white/20 space-y-2">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      • 上市公司电商 TOP 买手
                      <br />• 跨境物流公司执行董事
                      <br />• 国内供应链拓展总负责人
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. CEO: Peter Pan (基于PDF: 24年国贸+品牌运营) */}
            <div className="group relative h-[400px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer">
              <div className="absolute inset-0 bg-[url('/images/CEO.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-orange-300 text-[10px] font-bold backdrop-blur-md">
                    MANAGEMENT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-0.5">Peter Pan</h3>
                <p className="text-xs text-gray-400 font-mono mb-4">首席执行官 / CEO</p>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="pt-3 border-t border-white/20 space-y-2">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      • 24年国际贸易与品牌运营经验
                      <br />• 英国中华总商会副主席
                      <br />• 剑桥大学数理统计学深入研究硕士
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ==================== ❓ 新增：常见问题与答疑 (FAQ) ==================== */}

      <ScrollReveal>
        <div className="w-full mt-8 mb-20 max-w-4xl mx-auto px-4 relative z-10">
          {/* 标题区 */}
          <div className="text-center mb-12 animate-[fade-in-up_0.6s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              常见问题答疑{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">FAQ</span>
            </h2>
            <p className="text-gray-400 text-sm">针对出海企业最关心的资质、物流与流量问题，提供专业解答。</p>
          </div>

          {/* FAQ 列表容器 */}
          <div className="space-y-4">
            {/* Q1: 资质与合规 */}
            <FaqItem
              question="入驻 TikTok Shop 或 Amazon 需要海外主体吗？"
              answer="我们可以协助您完成全流程合规落地。提供从英国/美国公司注册、银行开户（Barclays/Wise等）到 VAT 税务登记的一站式服务，无需您亲自跑海外流程，快速开启全球生意。"
              delay={0}
            />

            {/* Q2: 物流与履约 */}
            <FaqItem
              question="没有自建海外仓，如何解决发货与退换货难题？"
              answer="依托 GlobalX 全球 160万+ 平方米的自营海外仓群（覆盖美、英、德、东南亚），我们提供一件代发、FBA 中转及专业的退换货处理服务。订单处理时效快至 24小时，库存准确率高达 99.9%。"
              delay={100}
            />

            {/* Q3: 流量与营销 */}
            <FaqItem
              question="如何精准对接海外本土网红进行带货？"
              answer="作为 TikTok 头部 MCN 机构，我们拥有 1000+ 签约本土达人资源，涵盖时尚、美妆、科技等全类目。我们提供从达人匹配、创意脚本策划到直播代运营的全案服务，确保品牌声量与销量双增长。"
              delay={200}
            />

            {/* Q4: 多平台布局 */}
            <FaqItem
              question="除了 TikTok，你们还支持哪些渠道的运营？"
              answer="我们是全域增长服务商。除了 TikTok，我们还深耕 Amazon、TEMU、SHEIN、Shopify 独立站以及线下商超渠道（如 Costco, Walmart），帮助品牌实现'线上+线下'的全渠道覆盖。"
              delay={300}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* ==================== 🔥 终极 CTA：准备好增长了吗？ ==================== */}
      <ScrollReveal>
        <div className="relative w-full rounded-[40px] overflow-hidden bg-gradient-to-b from-purple-900/20 to-black border border-white/10 p-12 md:p-24 text-center group">
          {/* 动态背景光效 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              准备好让品牌
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                引爆全球市场
              </span>
              了吗？
            </h2>
            <p className="text-lg text-gray-400">
              别让您的品牌在红海中沉没。加入 500+ 出海领航者的行列，开启指数级增长。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 w-full sm:w-auto">
                立即启动全案咨询
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto">
                下载 2025 趋势报告
              </button>
            </div>
          </div>

          {/* 装饰性网格 */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
      </ScrollReveal>

      {/* ==================== 🦶 终极页脚：极光流光底座 (Footer) ==================== */}

      <footer className="w-full mt-20 relative pt-16 pb-8 border-t border-white/5 bg-[#050505] overflow-hidden">
        {/* ✨ 极光流光底座 (Aurora Base Effect) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>

        {/* 1. 合作伙伴跑马灯 (整合在页脚顶部) */}
        <div className="w-full mb-16 overflow-hidden relative opacity-50 hover:opacity-100 transition-opacity duration-500">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div className="flex w-full overflow-hidden">
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 grayscale hover:grayscale-0 transition-all duration-500">
              {["TikTok", "Shopify", "Alibaba", "Meta", "Google", "Amazon", "TEMU", "SHEIN"].map((logo) => (
                <span
                  key={logo}
                  className="text-xl font-bold font-sans cursor-default px-4 text-gray-500 hover:text-white transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 grayscale hover:grayscale-0 transition-all duration-500">
              {["TikTok", "Shopify", "Alibaba", "Meta", "Google", "Amazon", "TEMU", "SHEIN"].map((logo) => (
                <span
                  key={`${logo}-duplicate`}
                  className="text-xl font-bold font-sans cursor-default px-4 text-gray-500 hover:text-white transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 页脚核心内容区 */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {/* 品牌列 */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              致力于为中国品牌提供一站式出海解决方案。从策略咨询到全球履约，赋能品牌通过 TikTok , Amazon
              等平台实现全球增长。
            </p>
            {/* 社交媒体图标 */}
            <div className="flex gap-4 pt-2">
              {["Twitter", "Instagram", "LinkedIn", "TikTok"].map((social) => (
                <button
                  key={social}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="text-[10px]">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 导航链接列 */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">解决方案</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">TikTok 全案运营</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">品牌独立站孵化</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">全球网红营销</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">数字化供应链</li>
            </ul>
          </div>

          {/* 全球网络列 (基于PDF地址) */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">全球网络 Global Network</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 英国地址 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 英国总部 (UK HQ)
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  Unit 2, Orpington Business Park, Faraday Way, Orpington BR5 3AA
                </p>
              </div>

              {/* 美国地址 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> 北美分部 (US Office)
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">5700 E Airport Dr, Ontario, CA 91761</p>
              </div>

              {/* 中国地址 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> 中国总部 (China HQ)
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">浙江省杭州市 (战略决策中心 / 研发中心)</p>
              </div>

              {/* 联系方式 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 商务对接
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  business@globalx.com <br />
                  +86 138-0000-0000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 版权信息底栏 */}
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600">
          <p>© 2025 GlobalX Technology Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Cookie Settings</span>
          </div>
        </div>
      </footer>

      <CaseModal isOpen={activeCase !== null} onClose={() => setActiveCase(null)} data={activeCase} />
    </div>
  )
}

const InsightCarousel = () => {
  const INSIGHTS = [
    {
      id: 0,
      type: "image",
      src: "/images/2026-whitepaper.jpg",
      tag: "2026 Q1 趋势报告",
      title: "2026年 欧美 DTC\n爆品赛道洞察白皮书",
      desc: "深度解析 TikTok Shop 全托管模式下的新机遇，揭秘 3 个高增长细分领域与选品逻辑。",
      bgStyle: "bg-purple-900/20",
      themeColor: "purple",
    },
    {
      id: 1,
      type: "video",
      src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-12502-large.mp4",
      tag: "市场动态",
      title: "研究趋势",
      desc: "了解最近欧美的市场趋势动态，掌握第一手消费风向标。",
      bgStyle: "bg-blue-900/20",
      themeColor: "blue",
    },
    {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
      tag: "采购需求",
      title: "B2B 采购线索",
      desc: "洞察全球 B2B 采购线索，了解最新的采购需求动态与大宗订单机会。",
      bgStyle: "bg-emerald-900/20",
      themeColor: "emerald",
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
