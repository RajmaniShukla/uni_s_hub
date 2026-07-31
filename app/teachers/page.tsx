import type { Metadata } from 'next'
import Header from '@/components/Header'
import TeacherProfiles from '@/components/TeacherProfiles'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Teachers | Universal Study Hub',
  description: 'Meet our expert tutors and teachers at Universal Study Hub. Verified professionals across all subjects and curricula.',
}

export default function TeachersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Educators</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Meet Our Teachers</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Handpicked, verified experts who bring real-world knowledge and a passion for teaching to every session.
          </p>
        </div>
      </section>

      <TeacherProfiles />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
