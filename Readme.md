# E-commerce App

This is a full-stack e-commerce application that allows users to browse products, add them to their cart, and make purchases. The application is divided into two main parts: the API and the frontend.

## API

The backend API is built with Node.js and Express. It provides endpoints for:

- User authentication and authorization
- Product management (CRUD operations)
- Cart management
- Order processing

### API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Login a user
- `GET /api/verify/:token` - Verify a user's email
- `GET /api/profile/:userId` - Get user profile by ID
- `POST /api/addresses` - Store a new address for the current user
- `GET /api/addresses/:id` - Retrieve all addresses for the current user
- `POST /api/orders` - Store all orders to backend
- `GET /api/orders/:userId` - Get all orders of user by ID

## Frontend

The frontend is built with React Native and provides a user-friendly interface for interacting with the API. It includes:

- User registration and login forms
- Product listing and detail pages
- Shopping cart management
- Checkout process

### Key Features

- Responsive design
- State management with Redux
- Form validation
- Error handling

## Deployment

The backend application is deployed on [Render.com](https://render.com).
[API Url](https://ecommerce-app-latest.onrender.com)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/ecommerce-app.git
   ```
2. Install NPM packages
   ```sh
   cd ecommerce-app/frontend
   npm install
   cd ../api
   npm install
   ```

### Running the App

1. Start the backend server
   ```sh
   cd api
   npm start
   ```
2. Start the frontend server for react native
   ```sh
   cd frontend
   npx expo start
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/me-AC/ecommerce-app](https://github.com/me-AC/ecommerce-app)
