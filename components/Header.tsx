'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Why Us', href: '#why-choose' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Universal Study Hub"
              width={44}
              height={44}
              className="rounded-full object-contain drop-shadow-md"
              priority
            />
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold transition-colors ${isScrolled ? 'text-primary-600 dark:text-primary-400' : 'text-white'}`}>Universal Study Hub</span>
              <span className={`text-[10px] font-medium -mt-1 hidden sm:block transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/60'}`}>Learn Without Limits</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>{link.name}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {mounted && (<button onClick={toggleTheme} className={`p-2.5 rounded-xl transition-all duration-300 ${isScrolled ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>)}
            <a href="/auth/signin" className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-slate-700 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}>Sign In</a>
            <a href="/auth/signup" className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg shadow-primary-500/20' : 'bg-white text-primary-700 hover:bg-white/90 shadow-lg'}`}>Get Started Free</a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            {mounted && (<button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'}`}>{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>)}
            <button className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in-up">
            <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (<a key={link.name} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-slate-700 font-medium py-3 px-4 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>))}
                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <a href="/auth/signin" className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-xl font-medium text-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sign In</a>
                    <a href="/auth/signup" className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-xl font-semibold text-center transition-all shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
