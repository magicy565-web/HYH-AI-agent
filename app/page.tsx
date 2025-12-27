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
  Search,
  Loader2,
  BrainCircuit,
  Calculator,
  Ship,
  Plane,
  Users
} from "lucide-react"
import * as React from "react"

// ✨ 通用滚动揭示组件
export const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-12 filter blur-sm"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ==========================================
// ✨ 核心功能组件：AI 智库工作台 (集成前端 2 的功能)
// ==========================================
const AIWorkbench = () => {
  const [activeTab, setActiveTab] = React.useState<'online' | 'logistics' | 'trade'>('online');
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState("");

  const handleAction = async () => {
    if(!input) return;
    setLoading(true);
    // 这里模拟调用逻辑，实际部署后会通过 lib/gemini.ts 调用 API
    setTimeout(() => {
      setResult(`[AI 分析报告] 针对您的产品 "${input}"：\n1. 市场潜力：极高，尤其在英美市场搜索量呈上升趋势。\n2. 建议定价：建议范围 $49 - $79。\n3. 物流建议：初期建议空运测试市场，稳定后转海运。`);
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="col-span-1 md:col-span-4 rounded-[40px] border border-white/10 bg-zinc-900/40 backdrop-blur-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
      {/* 装饰流光 */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] -z-10"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <BrainCircuit size={32} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">AI 跨境决策台</h2>
            <p className="text-gray-500 text-sm mt-1">由 HYH Data 12 核心算法驱动</p>
          </div>
        </div>

        {/* Tab 切换 */}
        <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5">
          {[
            { id: 'online', label: '线上研究', icon: Globe },
            { id: 'trade', label: '贸易评估', icon: BarChart3 },
            { id: 'logistics', label: '物流计算', icon: Calculator },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">
              {activeTab === 'logistics' ? '输入包装尺寸 (cm)' : '输入产品或品类名称'}
            </label>
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600"
              placeholder="例如：智能穿戴设备 / 20x20x15"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button 
            onClick={handleAction}
            disabled={loading}
            className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
            立即运行 AI 深度分析
          </button>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
              <Ship size={16} className="mx-auto mb-1 text-gray-500" />
              <span className="text-[10px] text-gray-400">海运专线</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
              <Plane size={16} className="mx-auto mb-1 text-gray-500" />
              <span className="text-[10px] text-gray-400">空运直达</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
              <Users size={16} className="mx-auto mb-1 text-gray-500" />
              <span className="text-[10px] text-gray-400">买家匹配</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] rounded-[32px] bg-black/40 border border-white/5 p-6 flex flex-col">
          <div className="text-[10px] text-gray-600 font-mono mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            SYSTEM_OUTPUT_LOG
          </div>
          {result ? (
            <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2">
              {result}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-20">
              <BrainCircuit size={48} className="mb-4" />
              <p className="text-sm">等待指令输入...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// ✨ 视觉组件：原有的轮播与视频等代码
// ==========================================

const TestimonialCarousel = () => {
  const [current, setCurrent] = React.useState(0)
  const [key, setKey] = React.useState(0)
  const testimonials = [
    { text: "团队非常专业，短短三个月就把我们的独立站转化率提升了两倍。", author: "Sarah Chen", role: "创始人", color: "from-pink-500 to-rose-500", tags: ["ROI翻倍"] },
    { text: "TikTok 投流策略太强了！黑五期间 GMV 突破了历史新高。", author: "David Liu", role: "市场总监", color: "from-cyan-500 to-blue-500", tags: ["TikTok直播"] },
  ]
  React.useEffect(() => {
    const timer = setInterval(() => { setCurrent((prev) => (prev + 1) % testimonials.length); setKey(k => k+1); }, 5000)
    return () => clearInterval(timer)
  }, [])
  const active = testimonials[current]
  return (
    <div className="h-full flex flex-col justify-between p-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />)}</div>
        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
          <div key={key} className="h-full bg-white/50 animate-[progress_5s_linear]" />
        </div>
      </div>
      <p className="text-gray-200 italic text-sm leading-relaxed mb-4">"{active.text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${active.color}`} />
        <div className="flex flex-col"><span className="text-white text-sm font-medium">{active.author}</span><span className="text-[11px] text-gray-500">{active.role}</span></div>
      </div>
    </div>
  )
}

const FeatureCarousel = () => {
  const FEATURES = [
    { id: 0, title: "TikTok 兴趣电商", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-Z5i7JBZa22niZvtZkVeEeK8MQIsESc.mp4", desc: "构建全链路营销闭环。" },
    { id: 1, title: "数字化供应链", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supply_chain-TBVMgSCz8ZfeM0iwPEdXBgtFLTNShm.mp4", desc: "自营海外仓履约。" },
  ]
  const [activeIndex, setActiveIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % FEATURES.length), 6000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
      {FEATURES.map((f, i) => (
        <div key={f.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === activeIndex ? "opacity-100" : "opacity-0"}`}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60"><source src={f.video} type="video/mp4" /></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-xs text-gray-300">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const InsightCarousel = () => {
  const INSIGHTS = [
    { id: 0, tag: "趋势报告", title: "2026 欧美 DTC 洞察", themeColor: "purple" },
    { id: 1, tag: "采购需求", title: "B2B 采购全球线索", themeColor: "emerald" },
  ]
  const [activeIndex, setActiveIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => setActiveIndex((prev) => (prev + 1) % INSIGHTS.length), 8000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="col-span-1 row-span-2 relative h-full min-h-[400px]">
      <div className={`absolute inset-0 rounded-[32px] border transition-all duration-1000 ${INSIGHTS[activeIndex].themeColor === 'purple' ? 'border-purple-500/50' : 'border-emerald-500/50'}`}></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-[32px] p-8 flex flex-col justify-end">
        <div className="mb-4 inline-block px-2 py-1 bg-white/10 rounded text-[10px] text-gray-400">▋ {INSIGHTS[activeIndex].tag}</div>
        <h4 className="text-2xl font-bold text-white mb-4 whitespace-pre-line">{INSIGHTS[activeIndex].title}</h4>
        <div className="flex gap-1 h-1 w-full bg-white/5 rounded-full overflow-hidden">
           <div className="h-full bg-white/50 w-full animate-[progress_8s_linear]" key={activeIndex}></div>
        </div>
      </div>
    </div>
  )
}

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  return (
    <>
      <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 mt-12 mb-8" onClick={() => setIsPlaying(true)}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[5s]">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-global-hightech-network-connections-surface-20584-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 hover:scale-110 transition-transform shadow-2xl">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white translate-x-1"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">连接全球 <span className="text-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">无限可能</span></h2>
        </div>
      </div>
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4" onClick={() => setIsPlaying(false)}>
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  )
}

// ==========================================
// 🏠 主页面渲染
// ==========================================

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-blue-500/30">
      
      {/* 背景光晕 */}
      <div className="fixed top-[-10%] left-[-20%] w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* 导航栏 */}
        <header className="flex justify-between items-center py-6 relative z-50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20">H</div>
            <span className="font-bold text-lg tracking-tight">HYH GLOBAL</span>
          </div>
          <button className="px-5 py-2 text-xs font-bold bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
            开始咨询
          </button>
        </header>

        {/* Bento 网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-20">
          
          {/* 1. Hero 卡片 */}
          <ScrollReveal>
            <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-[40px] bg-[#0A0A0A] p-10 md:p-12 border border-white/10 flex flex-col justify-between min-h-[450px]">
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  Next-Gen Ecommerce Solution
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  品牌出海<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">数字加速器</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  融合 AI 智库与全球基建，为中国工厂与品牌提供全链路数字化转型方案。
                </p>
              </div>
              <div className="flex gap-4 z-10">
                <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 flex items-center gap-2">
                  启动项目 <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. 核心 AI 功能 (注入点) */}
          <ScrollReveal delay={100}>
            <AIWorkbench />
          </ScrollReveal>

          {/* 3. 案例数据与轮播 */}
          <ScrollReveal delay={200}>
            <div className="col-span-1 rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between group overflow-hidden h-full">
               <div className="relative z-10">
                  <div className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest">Global GMV</div>
                  <div className="text-5xl font-bold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform">$8.7B</div>
                  <div className="flex items-center gap-1 text-green-400 text-xs font-bold">
                    <TrendingUp size={14} /> +325% Annual Growth
                  </div>
               </div>
               <div className="mt-8 space-y-4">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[70%]" />
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">覆盖全球 160万+ 平方米自营海外仓，实现极速履约。</p>
               </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <InsightCarousel />
          </ScrollReveal>

          {/* 4. 评价与能力 */}
          <ScrollReveal delay={400}>
            <div className="col-span-1 md:col-span-2 h-[280px] rounded-[32px] border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
              <TestimonialCarousel />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="col-span-1 md:col-span-2 h-[280px] rounded-[32px] border border-white/10 bg-black overflow-hidden relative">
              <FeatureCarousel />
            </div>
          </ScrollReveal>

        </div>

        {/* 视频 Hero */}
        <ScrollReveal>
          <VideoHero />
        </ScrollReveal>

        {/* 页脚 */}
        <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-bold">H</div>
            <span className="text-sm">© 2025 HYH Global Data. All rights reserved.</span>
          </div>
          <div className="flex gap-10 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">TikTok 全案</span>
            <span className="hover:text-white cursor-pointer transition-colors">海外仓储</span>
            <span className="hover:text-white cursor-pointer transition-colors">合规审计</span>
          </div>
        </footer>
      </div>
    </div>
  )
}