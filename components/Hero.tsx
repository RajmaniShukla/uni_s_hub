'use client'

import { ArrowRight, Play, Star, Award, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '500+', label: 'Expert Tutors' },
    { number: '98%', label: 'Success Rate' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-5xl mx-auto text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 text-sm font-medium">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>Rated #1 Learning Platform in India</span>
            <div className="flex items-center gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
            Transform Your Learning with{' '}
            <span className="gradient-text-animated">World-Class Tutors</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto font-medium">Your Global Gateway to Quality Education</p>
          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto">Connect with 500+ verified tutors across all subjects. Personalized learning paths, live sessions, and guaranteed results.</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10">
            {['1-on-1 Live Classes', 'Personalized Learning', 'Progress Tracking', '24/7 Support'].map((f, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />{f}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <a href="/auth/signup" className="w-full sm:w-auto group bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 hover:from-primary-600 hover:via-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/30 flex items-center justify-center gap-2 hover:-translate-y-1">
              Start Learning Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto group bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors"><Play className="w-4 h-4 ml-0.5" /></div>
              Watch Demo
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-10 sm:mb-12">
            {stats.map((s, i) => (<div key={i} className="text-center"><div className="text-2xl sm:text-4xl font-bold text-white mb-1">{s.number}</div><p className="text-xs sm:text-sm text-slate-400">{s.label}</p></div>))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center -space-x-3">
              {['👨‍🎓','👩‍🎓','👨‍💻','👩‍💻','👨‍🏫'].map((e,i) => (<div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-lg sm:text-xl ring-2 ring-slate-900">{e}</div>))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold ring-2 ring-slate-900">+10K</div>
            </div>
            <p className="text-slate-400 text-sm">Join 10,000+ students already learning</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"><div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" /></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  )
}
