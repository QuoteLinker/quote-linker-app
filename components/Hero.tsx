export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Minneapolis Life Insurance Quotes
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Compare rates from trusted local agents. Get your personalized quote in minutes.
        Save up to 40% on your life insurance coverage.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          No Medical Exam Required
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Instant Quotes
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Local Minneapolis Agents
        </div>
      </div>
    </div>
  )
} 