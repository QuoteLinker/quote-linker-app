import Image from 'next/image'

export default function TrustSignals() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Trust QuoteLinker?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">Licensed & Secure</h4>
              <p className="mt-1 text-sm text-gray-500">All agents are licensed and background-checked</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">Save Up to 40%</h4>
              <p className="mt-1 text-sm text-gray-500">Compare rates from top insurance companies</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">Quick Process</h4>
              <p className="mt-1 text-sm text-gray-500">Get covered in as little as 10 minutes</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">Expert Support</h4>
              <p className="mt-1 text-sm text-gray-500">Local agents ready to help you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/ssl-badge.svg"
                alt="SSL Secure"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">SSL Secure</h4>
              <p className="text-xs text-gray-500">Your data is protected</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/trustpilot-badge.svg"
                alt="Trustpilot Rating"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">4.8/5 Rating</h4>
              <p className="text-xs text-gray-500">Based on 1,000+ reviews</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Licensed Agents</h4>
              <p className="text-xs text-gray-500">State-approved professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 