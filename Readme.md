# E-commerce App

This is a full-stack e-commerce application that allows users to browse products, add them to their cart, and make purchases. The application is divided into two main parts: the API and the frontend.

## API

The backend API is built with Node.js and Express. It provides endpoints for:

- User authentication and authorization
- Product management (CRUD operations)
- Cart management
- Order processing

### API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID
- `GET /api/cart` - Get the current user's cart
- `POST /api/cart` - Add an item to the cart
- `DELETE /api/cart/:id` - Remove an item from the cart
- `POST /api/orders` - Create a new order

## Frontend

The frontend is built with React and provides a user-friendly interface for interacting with the API. It includes:

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

The application is deployed on [Render.com](https://render.com).

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
   cd ecommerce-app
   npm install
   ```

### Running the App

1. Start the backend server
   ```sh
   cd backend
   npm start
   ```
2. Start the frontend server
   ```sh
   cd frontend
   npm start
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
