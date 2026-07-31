import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import SubjectsStandards from '@/components/SubjectsStandards'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AdPopup from '@/components/AdPopup'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <SubjectsStandards />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <AdPopup />
    </main>
  )
}
