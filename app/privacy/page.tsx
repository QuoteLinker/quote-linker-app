export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Name and contact information</li>
            <li>Insurance coverage preferences</li>
            <li>ZIP code and location information</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Connect you with licensed insurance agents</li>
            <li>Provide personalized insurance quotes</li>
            <li>Send you relevant information about insurance products</li>
            <li>Improve our services and user experience</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Information Sharing
          </h2>
          <p className="text-gray-600 mb-6">
            We share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Licensed insurance agents in your area</li>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">
            Email: privacy@quotelinker.com
          </p>
        </div>
      </div>
    </main>
  )
} 