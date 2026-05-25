'use client'

import { ArrowRight, Users, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const curricula = [
  {
    id: 'igcse',
    label: 'IGCSE',
    fullName: 'Cambridge IGCSE',
    color: 'from-blue-600 to-blue-800',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-700',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    icon: '🎓',
    level: 'Grades 9–10',
    students: 3200,
    subjects: [
      { name: 'Mathematics', students: 1250 },
      { name: 'Physics', students: 980 },
      { name: 'Chemistry', students: 870 },
      { name: 'English Language', students: 1100 },
      { name: 'Biology', students: 760 },
      { name: 'Economics', students: 540 },
    ],
  },
  {
    id: 'ib',
    label: 'IB Diploma',
    fullName: 'IB Diploma Programme',
    color: 'from-purple-600 to-purple-800',
    lightBg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-700',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    icon: '🌍',
    level: 'Grades 11–12',
    students: 2100,
    subjects: [
      { name: 'Mathematics HL/SL', students: 890 },
      { name: 'Physics HL/SL', students: 720 },
      { name: 'Chemistry HL/SL', students: 650 },
      { name: 'Economics HL/SL', students: 580 },
      { name: 'English A/B', students: 770 },
      { name: 'TOK / EE', students: 430 },
    ],
  },
  {
    id: 'cbse',
    label: 'CBSE',
    fullName: 'CBSE Board',
    color: 'from-orange-500 to-orange-700',
    lightBg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-700',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    icon: '📚',
    level: 'Grades 6–12',
    students: 4800,
    subjects: [
      { name: 'Mathematics', students: 1800 },
      { name: 'Science (PCB/PCM)', students: 1650 },
      { name: 'English', students: 1200 },
      { name: 'Social Studies', students: 780 },
      { name: 'Hindi', students: 620 },
      { name: 'Accountancy', students: 540 },
    ],
  },
  {
    id: 'icse',
    label: 'ICSE',
    fullName: 'ICSE / ISC Board',
    color: 'from-pink-600 to-pink-800',
    lightBg: 'bg-pink-50 dark:bg-pink-900/20',
    border: 'border-pink-200 dark:border-pink-700',
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    icon: '📖',
    level: 'Grades 6–12',
    students: 2600,
    subjects: [
      { name: 'Mathematics', students: 980 },
      { name: 'Physics', students: 820 },
      { name: 'Chemistry', students: 760 },
      { name: 'English Literature', students: 1050 },
      { name: 'History & Civics', students: 540 },
      { name: 'Commerce', students: 430 },
    ],
  },
  {
    id: 'sat',
    label: 'SAT / ACT',
    fullName: 'SAT & ACT Prep',
    color: 'from-green-600 to-green-800',
    lightBg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-700',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    icon: '✏️',
    level: 'US College Entrance',
    students: 1400,
    subjects: [
      { name: 'SAT Math', students: 680 },
      { name: 'SAT Reading & Writing', students: 720 },
      { name: 'ACT Mathematics', students: 380 },
      { name: 'ACT English', students: 340 },
      { name: 'ACT Science', students: 290 },
      { name: 'Essay Writing', students: 250 },
    ],
  },
  {
    id: 'jee',
    label: 'JEE / NEET',
    fullName: 'JEE & NEET Preparation',
    color: 'from-red-600 to-red-800',
    lightBg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-700',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    icon: '⚗️',
    level: 'Engineering & Medical',
    students: 3900,
    subjects: [
      { name: 'Physics (JEE)', students: 1200 },
      { name: 'Chemistry (JEE/NEET)', students: 1100 },
      { name: 'Mathematics (JEE)', students: 980 },
      { name: 'Biology (NEET)', students: 920 },
      { name: 'Problem Solving', students: 650 },
      { name: 'Mock Tests', students: 780 },
    ],
  },
]

export default function CoursesOffered() {
  const [active, setActive] = useState('igcse')
  const cur = curricula.find(c => c.id === active)!

  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Courses by Curriculum
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Select your board and see the subjects we cover — with expert tutors for every topic
          </p>
        </div>

        {/* Curriculum tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {curricula.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border
                ${active === c.id
                  ? `bg-gradient-to-r ${c.color} text-white border-transparent shadow-lg scale-105`
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:scale-105'
                }`}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Active curriculum panel */}
        <div className={`max-w-5xl mx-auto ${cur.lightBg} border ${cur.border} rounded-2xl overflow-hidden shadow-xl mb-12`}>
          {/* Header */}
          <div className={`bg-gradient-to-r ${cur.color} p-6 sm:p-8 text-white`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{cur.icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold">{cur.fullName}</h3>
                </div>
                <p className="text-white/70 text-sm">{cur.level} · {cur.students.toLocaleString()} students enrolled</p>
              </div>
              <a
                href="/auth/signup"
                className="flex-shrink-0 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
              >
                Find a Tutor <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Subjects grid */}
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Subjects Available</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cur.subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-slate-800 dark:text-white text-sm">{sub.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${cur.badge} flex items-center gap-1`}>
                    <Users className="w-3 h-3" /> {sub.students}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="/auth/signup"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${cur.color} text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-transform`}
              >
                Start {cur.label} Tutoring <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[
            { val: '6+', label: 'Boards Covered' },
            { val: '50K+', label: 'Students Learning' },
            { val: '500+', label: 'Expert Tutors' },
            { val: '4.9/5', label: 'Average Rating' },
          ].map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-xl text-center border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">{s.val}</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
