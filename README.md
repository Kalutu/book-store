# Book Store Application

This application is a book store that empowers users to efficiently manage and organize their book collection. It offers a user-friendly interface for adding, editing, and deleting books, as well as viewing detailed information about each book.

## Features

- Add a new book with details such as title, author, and publish year.
- Edit existing book information.
- Delete books from the collection.
- View detailed information about each book.
- User-friendly interface.

## Technologies

**Frontend:**

- React
- React Router
- Tailwind CSS

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)

**Additional Tools:**

- Axios (for making HTTP requests)
- Notistack (for displaying notifications on the app)
- Nodemon (for server auto-restart during development)

## Getting Started

Make sure you have Node.js and MongoDB installed on your machine.

### Installation

1. Clone the repository: `git clone https://github.com/Kalutu/book-store`
2. Change into the project directory: `cd book-store`
3. Change into the frontend directory: `cd frontend`
4. Install dependencies: `npm install`
5. Start frontend server: `npm run dev`
6. Open a new tab in the terminal
7. Change into the backend directory: `cd backend`
8. Install dependencies: `npm install`
9. Start backend server: `npm run dev`

### Configuration

Create a `.config` file in the backend directory with the following content:

- `PORT=your port`
- `MONGO_URI=your connection string`

## API Endpoints

### Get all books

**Endpoint:** `GET /api/v1/books`
**Description:** Get a list of all books.

### Get a single book by ID

**Endpoint:** `GET /api/v1/books/:id`
**Description:** Get detailed information about a specific book identified by its ID.

### Add a new book

**Endpoint:** `POST /api/v1/books`
**Description:** Add a new book to the collection.

### Update an existing book

**Endpoint:** `PUT /api/v1/books/:id`
**Description:** Update information for an existing book identified by its ID.

### Delete a book

**Endpoint:** `DELETE /api/v1/books/:id`
**Description:** Delete a book from the collection based on its ID.

## Frontend Structure

- **src/components:** Reusable React components.
- **src/pages:** Main pages of the application.
- **src/App.js:** Main component rendering the application.

## Backend Structure

- **server.js:** Entry point for the Express.js server.
- **routes/bookRoutes.js:** API routes for handling book-related requests.
- **models/Book.js:** Mongoose model for the Book schema.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please open an issue or submit a pull request.
