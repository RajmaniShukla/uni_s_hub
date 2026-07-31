import type { Metadata } from 'next'
import Header from '@/components/Header'
import CoursesOffered from '@/components/CoursesOffered'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Courses | Universal Study Hub',
  description: 'Explore all courses offered at Universal Study Hub — IGCSE, IB, CBSE, ICSE, SAT, JEE, NEET and more. Find the right curriculum for you.',
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Courses & Curricula</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From international boards to Indian competitive exams — we cover every curriculum with expert, personalised tutoring.
          </p>
        </div>
      </section>

      <CoursesOffered />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
