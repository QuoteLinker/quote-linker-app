export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-6">
            By accessing and using QuoteLinker, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-600 mb-6">
            Permission is granted to temporarily access QuoteLinker for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of title, and
            under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on QuoteLinker</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Insurance Services
          </h2>
          <p className="text-gray-600 mb-6">
            QuoteLinker provides a platform to connect consumers with licensed insurance agents.
            We do not provide insurance services directly. All insurance products and services
            are provided by licensed insurance agents and carriers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. User Responsibilities
          </h2>
          <p className="text-gray-600 mb-6">
            As a user of QuoteLinker, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Not use the service for any illegal purposes</li>
            <li>Not interfere with the proper functioning of the service</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Disclaimer
          </h2>
          <p className="text-gray-600 mb-6">
            The materials on QuoteLinker are provided on an 'as is' basis. QuoteLinker makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Limitations
          </h2>
          <p className="text-gray-600 mb-6">
            In no event shall QuoteLinker or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on QuoteLinker.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600">
            Email: legal@quotelinker.com
          </p>
        </div>
      </div>
    </main>
  )
} 