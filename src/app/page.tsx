'use client'

import { useEffect, useState } from 'react'

export default function HelloWorldPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main greeting card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/20">
          {/* Animated greeting */}
          <div className="space-y-6">
            <div className="inline-block animate-bounce">
              <span className="text-6xl md:text-8xl">👋</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hello World!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Welcome to your first Next.js application. This simple page demonstrates 
              modern web development with React, TypeScript, and Tailwind CSS.
            </p>
            
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>✨</span>
                <span>Built with BLACKBOX.AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Fast & Modern</h3>
            <p className="text-sm text-gray-600">Built with Next.js 15 and React 19 for optimal performance</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-800 mb-2">Beautiful Design</h3>
            <p className="text-sm text-gray-600">Styled with Tailwind CSS and modern design principles</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-sm text-gray-600">Looks great on desktop, tablet, and mobile devices</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-gray-500">
          <p>Ready to build something amazing? Let's get started! 🚀</p>
        </div>
      </div>
    </div>
  )
}