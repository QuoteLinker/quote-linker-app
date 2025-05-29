import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Term Life Insurance in Minneapolis',
    excerpt: 'Learn about term life insurance options, coverage amounts, and how to choose the right policy for your family.',
    slug: 'understanding-term-life-insurance-minneapolis',
    category: 'Term Life',
  },
  {
    id: 2,
    title: 'Whole Life Insurance: Building Cash Value in Minnesota',
    excerpt: 'Discover how whole life insurance can provide both protection and a cash value component for your financial future.',
    slug: 'whole-life-insurance-cash-value-minnesota',
    category: 'Whole Life',
  },
  {
    id: 3,
    title: 'Life Insurance for Minneapolis Families: A Complete Guide',
    excerpt: 'Everything you need to know about protecting your family with life insurance in the Minneapolis metro area.',
    slug: 'life-insurance-minneapolis-families-guide',
    category: 'Guides',
  },
]

export default function EducationPortal() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Life Insurance Education Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights and guides to help you make informed decisions about your life insurance coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/education/${post.slug}`}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-gray-600 mb-6">
            Our licensed Minneapolis insurance agents are here to help you understand your options and find the right coverage.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Get Your Quote
          </Link>
        </div>
      </div>
    </main>
  )
} 