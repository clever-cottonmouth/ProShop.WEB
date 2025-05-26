# ProShop E-commerce Platform

A modern e-commerce platform built with React, featuring a responsive design, secure payment processing, and comprehensive product management.

## Features

- 🛍️ Product browsing and searching
- 🛒 Shopping cart functionality
- 💳 Secure payment processing with PayPal integration
- 👤 User authentication and profile management
- 📱 Responsive design for all devices
- 🔍 Advanced product filtering and search
- ⭐ Product reviews and ratings
- 📦 Order management and tracking

## Tech Stack

### Frontend
- React 18.3.1
- Redux Toolkit for state management
- React Router for navigation
- React Bootstrap for UI components
- React Helmet for SEO optimization
- React Icons for iconography
- React Toastify for notifications
- PayPal React SDK for payment processing

### Development Tools
- Create React App
- ESLint for code linting
- Jest for testing

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ProShop.WEB
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
```

4. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices and feature-specific components
├── pages/         # Page components
├── services/      # API services and utilities
├── store/         # Redux store configuration
└── utils/         # Helper functions and constants
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email [support@proshop.com](mailto:support@proshop.com) or open an issue in the repository.
