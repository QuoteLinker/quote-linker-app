/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['quotelinker.com'],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    SALESFORCE_CLIENT_ID: process.env.SALESFORCE_CLIENT_ID,
    SALESFORCE_CLIENT_SECRET: process.env.SALESFORCE_CLIENT_SECRET,
    SALESFORCE_USERNAME: process.env.SALESFORCE_USERNAME,
    SALESFORCE_PASSWORD: process.env.SALESFORCE_PASSWORD,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
}

module.exports = nextConfig 