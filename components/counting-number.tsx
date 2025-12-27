"use client"

import React from "react"

export const CountingNumber = ({
  value,
  duration = 2000,
  decimals = 0,
  className = "",
}: {
  value: number
  duration?: number
  decimals?: number
  className?: string
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)

      const current = startValue + (value - startValue) * easeProgress
      setDisplayValue(current)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {displayValue.toFixed(decimals)}
    </span>
  )
}
