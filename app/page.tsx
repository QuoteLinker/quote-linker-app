import LeadForm from '@/components/LeadForm'
import TrustSignals from '@/components/TrustSignals'
import Hero from '@/components/Hero'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Get Your Life Insurance Quote in Minutes
            </h2>
            <p className="text-lg text-gray-600">
              Compare rates from trusted Minneapolis insurance agents. Quick, easy, and secure.
            </p>
            <TrustSignals />
          </div>
          
          <div className="form-container">
            <LeadForm />
          </div>
        </div>
      </div>
      <Chatbot />
    </main>
  )
} 