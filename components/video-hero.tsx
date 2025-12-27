"use client"

import React from "react"

export const VideoHero = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <>
      <div
        className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl mt-12 mb-8"
        onClick={() => setIsPlaying(true)}
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 saturate-[.7] group-hover:scale-110 transition-transform duration-[3s] ease-out"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-global-hightech-network-connections-surface-20584-large.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/20 mix-blend-multiply" />
          <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
          <div className="relative group/btn mb-8">
            <div className="absolute inset-0 -m-4 bg-blue-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000 delay-100"></div>
            <div className="absolute inset-0 -m-2 bg-purple-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000"></div>

            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative z-20">
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

          <div className="space-y-4 animate-[fade-in-up_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md mb-2 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Brand Video
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
              连接全球{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                无限可能
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto leading-relaxed opacity-90 font-medium drop-shadow">
              3分钟了解 GlobalX 如何通过全链路数字化方案，助力中国品牌跨越山海，实现从 0 到 1 的全球化跃迁。
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-4 md:p-10 animate-[fade-in_0.3s]">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-50 group"
          >
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

          <div className="relative w-full max-w-6xl aspect-video bg-[#0A0A0A] rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-[scale-up_0.4s_ease-out]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0&modestbranding=1&color=white"
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
