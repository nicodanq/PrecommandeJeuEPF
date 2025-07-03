"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Date de fin de précommande (à ajuster selon vos besoins)
    const endDate = new Date("2025-07-31T23:59:00") // Exemple : 31 juillet 2025 à 23:59
    
    endDate.setDate(endDate.getDate()) // 30 jours à partir d'aujourd'hui

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-3">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-4 text-sm md:text-base">
        <Clock className="h-5 w-5" />
        <span className="font-semibold">Fin des précommandes dans :</span>
        <div className="flex space-x-4">
          <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.days}j</span>
          <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.hours}h</span>
          <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.minutes}m</span>
          <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  )
}
