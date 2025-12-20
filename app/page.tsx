import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import SubjectsStandards from '@/components/SubjectsStandards'
import WhyChoose from '@/components/WhyChoose'
import StudentsParents from '@/components/StudentsParents'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <SubjectsStandards />
      <WhyChoose />
      <StudentsParents />
      <CTASection />
      <Footer />
    </main>
  )
}

