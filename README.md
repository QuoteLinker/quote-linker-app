# QuoteLinker

A scalable web application for hyper-local lead generation focused on term life and cash value whole life insurance, targeting the Minneapolis metro area.

## Features

- Clean, conversion-focused design
- Lead capture form with validation
- Trust signals and security badges
- MongoDB integration for lead storage
- Salesforce CRM integration
- Google Analytics 4 tracking
- A/B testing capabilities

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MongoDB Atlas
- Salesforce
- Google Analytics 4
- Vercel (Deployment)
- Cloudflare (DNS/CDN)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/QuoteLinker/quote-linker-web.git
   cd quote-linker-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   MONGODB_URI=your_mongodb_uri
   SALESFORCE_CLIENT_ID=your_salesforce_client_id
   SALESFORCE_CLIENT_SECRET=your_salesforce_client_secret
   SALESFORCE_USERNAME=your_salesforce_username
   SALESFORCE_PASSWORD=your_salesforce_password
   GA_MEASUREMENT_ID=your_ga4_measurement_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Push to GitHub:
   ```bash
   git push origin main
   ```

2. Connect your GitHub repository to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Import your repository
   - Configure environment variables
   - Deploy

3. Set up Cloudflare:
   - Add your domain
   - Configure DNS records
   - Enable SSL/TLS
   - Set up caching rules

## Project Structure

```
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
│   │   
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── LeadForm.tsx
│   ├── TrustSignals.tsx
│   └── Hero.tsx
├── public/
│   └── images/
├── styles/
└── types/
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 