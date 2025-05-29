#!/bin/bash

# Create necessary directories
mkdir -p app/api/leads
mkdir -p components
mkdir -p public/images
mkdir -p styles
mkdir -p types

# Install dependencies
npm install

# Create .env.local template
cat > .env.local.template << EOL
MONGODB_URI=your_mongodb_uri
SALESFORCE_CLIENT_ID=your_salesforce_client_id
SALESFORCE_CLIENT_SECRET=your_salesforce_client_secret
SALESFORCE_USERNAME=your_salesforce_username
SALESFORCE_PASSWORD=your_salesforce_password
GA_MEASUREMENT_ID=your_ga4_measurement_id
EOL

# Make the script executable
chmod +x init.sh

echo "Project initialized successfully!"
echo "Next steps:"
echo "1. Copy .env.local.template to .env.local and fill in your values"
echo "2. Run 'npm run dev' to start the development server" 