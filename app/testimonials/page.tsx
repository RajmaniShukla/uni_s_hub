import type { Metadata } from 'next'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Success Stories | Universal Study Hub',
  description: 'Read real success stories from students who improved their grades and achieved their academic goals with Universal Study Hub.',
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Success Stories</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Thousands of students have transformed their academic journey with Universal Study Hub. Here are some of their stories.
          </p>
        </div>
      </section>

      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
