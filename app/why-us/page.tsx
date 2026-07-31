import type { Metadata } from 'next'
import Header from '@/components/Header'
import WhyChoose from '@/components/WhyChoose'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Why Us | Universal Study Hub',
  description: 'Discover why thousands of students and parents choose Universal Study Hub for personalised, expert-led tutoring across all curricula.',
}

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Difference</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Us?</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We&apos;re not just a tutoring platform. We&apos;re your academic partner — committed to results, not just sessions.
          </p>
        </div>
      </section>

      <WhyChoose />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
