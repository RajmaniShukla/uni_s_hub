import type { Metadata } from 'next'
import Header from '@/components/Header'
import About from '@/components/About'
import StudentsParents from '@/components/StudentsParents'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us | Universal Study Hub',
  description: 'Learn about Universal Study Hub — our mission, vision, and the team building the future of personalised education.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Universal Study Hub</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We&apos;re on a mission to make world-class education accessible to every student, anywhere.
          </p>
        </div>
      </section>

      <About />
      <StudentsParents />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
