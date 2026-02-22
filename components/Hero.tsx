'use client'

import { ArrowRight, BookOpen, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-slate-900 dark:via-primary-900 dark:to-slate-900 overflow-hidden pt-16 sm:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-400 dark:bg-primary-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-primary-200 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white">
            Universal Study Hub
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary-100 dark:text-primary-200 mb-3 sm:mb-4">
            Your Global Gateway to Quality Education
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-primary-100 dark:text-primary-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ask. Learn. Connect with the Best Tutors Worldwide
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg text-primary-100/90 dark:text-primary-200/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            A unified learning platform where students and parents can raise academic queries for any subject 
            and get connected with the best tutors and teachers across all international standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <a
              href="#cta"
              className="w-full sm:w-auto group bg-white hover:bg-primary-50 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Raise a Study Query
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#how-it-works"
              className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              Find a Tutor
            </a>
          </div>

          <a
            href="#students-parents"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white font-medium text-base sm:text-lg transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            For Parents
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
