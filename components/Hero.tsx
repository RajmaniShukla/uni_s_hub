'use client'

import { ArrowRight, Star, Award, CheckCircle, BookOpen, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const curricula = [
  {
    id: 'igcse',
    label: 'IGCSE',
    fullName: 'Cambridge IGCSE',
    description: 'Grades 9–10 · International',
    color: 'from-blue-500 to-blue-700',
    border: 'border-blue-400/40',
    glow: 'shadow-blue-500/30',
    icon: '🎓',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology'],
  },
  {
    id: 'ib',
    label: 'IB',
    fullName: 'IB Diploma (DP)',
    description: 'Grades 11–12 · International',
    color: 'from-purple-500 to-purple-700',
    border: 'border-purple-400/40',
    glow: 'shadow-purple-500/30',
    icon: '🌍',
    subjects: ['Mathematics HL/SL', 'Physics', 'Chemistry', 'Economics', 'TOK'],
  },
  {
    id: 'cbse',
    label: 'CBSE',
    fullName: 'CBSE Board',
    description: 'Grades 6–12 · India',
    color: 'from-orange-500 to-orange-700',
    border: 'border-orange-400/40',
    glow: 'shadow-orange-500/30',
    icon: '📚',
    subjects: ['Science', 'Maths', 'Social Studies', 'English', 'Hindi'],
  },
  {
    id: 'sat',
    label: 'SAT / ACT',
    fullName: 'SAT & ACT Prep',
    description: 'US College Entrance',
    color: 'from-green-500 to-green-700',
    border: 'border-green-400/40',
    glow: 'shadow-green-500/30',
    icon: '✏️',
    subjects: ['Math', 'Reading', 'Writing', 'Evidence-Based Reading', 'Essay'],
  },
  {
    id: 'icse',
    label: 'ICSE',
    fullName: 'ICSE Board',
    description: 'Grades 6–12 · India',
    color: 'from-pink-500 to-pink-700',
    border: 'border-pink-400/40',
    glow: 'shadow-pink-500/30',
    icon: '📖',
    subjects: ['Mathematics', 'Science', 'English Literature', 'History', 'Commerce'],
  },
  {
    id: 'jee',
    label: 'JEE / NEET',
    fullName: 'JEE & NEET Prep',
    description: 'Engineering & Medical',
    color: 'from-red-500 to-red-700',
    border: 'border-red-400/40',
    glow: 'shadow-red-500/30',
    icon: '⚗️',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Problem Solving'],
  },
]

const stats = [
  { number: '50K+', label: 'Active Students' },
  { number: '500+', label: 'Expert Tutors' },
  { number: '98%', label: 'Success Rate' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [selected, setSelected] = useState('igcse')

  useEffect(() => { setMounted(true) }, [])

  const active = curricula.find(c => c.id === selected)!

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className={`max-w-6xl mx-auto ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>

          {/* Top badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 text-sm font-medium">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Rated #1 Learning Platform in India</span>
              <div className="flex items-center gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />))}
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              Expert 1-on-1 Tutoring for{' '}
              <span className="gradient-text-animated">Every Curriculum</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              From IGCSE to IB, CBSE to SAT — connect with verified tutors and achieve the grades you deserve.
            </p>
          </div>

          {/* ── CURRICULUM SELECTOR ── */}
          <div className="mt-10 mb-8">
            <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-5">
              What are you studying?
            </p>

            {/* Curriculum pill tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {curricula.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                  className={`relative px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border
                    ${selected === c.id
                      ? `bg-gradient-to-r ${c.color} text-white border-transparent shadow-lg ${c.glow} scale-105`
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white hover:scale-105'
                    }`}
                >
                  <span className="mr-1.5">{c.icon}</span>
                  {c.label}
                  {selected === c.id && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Active curriculum card */}
            <div className={`max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border ${active.border} rounded-2xl p-5 sm:p-6 transition-all duration-300`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {active.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">{active.fullName}</h3>
                    <span className="text-xs px-2 py-0.5 bg-white/10 text-slate-300 rounded-full">{active.description}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {active.subjects.map((sub) => (
                      <span key={sub} className="flex items-center gap-1 text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                        <BookOpen className="w-3 h-3 text-primary-400" />
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/auth/signup"
                  className={`flex-shrink-0 flex items-center gap-2 bg-gradient-to-r ${active.color} text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-transform`}
                >
                  Find a Tutor <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['1-on-1 Live Classes', 'Personalized Learning', 'Progress Tracking', '24/7 Support'].map((f, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />{f}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="/auth/signup" className="w-full sm:w-auto group bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 hover:from-primary-600 hover:via-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/30 flex items-center justify-center gap-2 hover:-translate-y-1">
              Start Learning Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/919876541177?text=Hi%21%20I%20have%20a%20query%20about%20Universal%20Study%20Hub." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
              💬 Raise a Query
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{s.number}</div>
                <p className="text-xs sm:text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center -space-x-3">
              {['👨‍🎓','👩‍🎓','👨‍💻','👩‍💻','👨‍🏫'].map((e, i) => (
                <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-lg sm:text-xl ring-2 ring-slate-900">{e}</div>
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold ring-2 ring-slate-900">+10K</div>
            </div>
            <p className="text-slate-400 text-sm">Join 10,000+ students already learning</p>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  )
}
