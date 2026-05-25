'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ArrowRight, Phone, MessageSquare } from 'lucide-react'

export default function AdPopup() {
  const [visible, setVisible] = useState(false)

  // Show after a short delay so the page renders first
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setVisible(false)}
    >
      {/* Popup card — stop click from bubbling to backdrop */}
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-900/30 text-slate-500 hover:text-red-500 rounded-full flex items-center justify-center shadow transition-all duration-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top gradient banner */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 px-6 pt-8 pb-6 text-white text-center relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl" />

          {/* Logo */}
          <div className="flex justify-center mb-3 relative z-10">
            <Image
              src="/logo.png"
              alt="Universal Study Hub"
              width={64}
              height={64}
              className="rounded-full object-contain drop-shadow-lg"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 relative z-10">
            🎓 Free Trial Class
          </h2>
          <p className="text-primary-100 text-sm sm:text-base relative z-10">
            Book your first session — absolutely free!
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Boards strip */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {['IGCSE', 'IB', 'CBSE', 'ICSE', 'SAT', 'JEE', 'NEET'].map((b) => (
              <span
                key={b}
                className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold px-3 py-1 rounded-full border border-primary-200 dark:border-primary-700"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2 mb-5 text-sm text-slate-700 dark:text-slate-300">
            {[
              '✅ 1-on-1 sessions with board-specialist tutors',
              '✅ A* results in IGCSE · 7s in IB · Top ranks in JEE/NEET',
              '✅ Flexible scheduling — morning, evening & weekends',
              '✅ SCO 43, Sector 20C, Chandigarh — 160020',
            ].map((pt) => (
              <li key={pt} className="flex items-start gap-2">
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/auth/signup"
              onClick={() => setVisible(false)}
              className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-500/30 transition-all"
            >
              Book Free Class <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919876541177?text=Hi%21%20I%20want%20to%20book%20a%20free%20trial%20class."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setVisible(false)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          {/* Phone */}
          <p className="text-center mt-4 text-xs text-slate-500 dark:text-slate-400">
            📞{' '}
            <a href="tel:+919876541177" className="hover:text-primary-600 transition-colors font-medium">
              +91 98765 41177
            </a>
            {' '}·{' '}
            <a href="tel:+917428748090" className="hover:text-primary-600 transition-colors font-medium">
              +91 74287 48090
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
