import Link from 'next/link'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A licensed Minneapolis insurance agent will contact you shortly with your personalized quote.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100">
                    <span className="text-sm font-medium text-primary-600">1</span>
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-700">
                    A licensed agent will review your information and prepare your personalized quote.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100">
                    <span className="text-sm font-medium text-primary-600">2</span>
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-700">
                    You'll receive a call or email within 24 hours with your quote and coverage options.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100">
                    <span className="text-sm font-medium text-primary-600">3</span>
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-base text-gray-700">
                    Your agent will help you choose the best policy for your needs and guide you through the application process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Return to Home
            </Link>
            <p className="text-sm text-gray-500">
              Questions? Contact us at{' '}
              <a href="mailto:support@quotelinker.com" className="text-primary-600 hover:text-primary-700">
                support@quotelinker.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 