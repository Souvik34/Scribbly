# Scribbly

Scribbly is a web application for managing notes. It allows users to create, edit, and delete notes, as well as sign up and log in to their accounts.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: A library for routing in React applications.
- **React Icons**: A library for including popular icons in React projects.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: A module to load environment variables from a `.env` file.
- **cookie-parser**: A middleware to parse cookies.
- **cors**: A middleware to enable Cross-Origin Resource Sharing.

### Database
- **MongoDB**: A NoSQL database for storing application data.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/scribbly.git
   cd scribbly
   ```
2. Install dependencies for the frontend:
    ```sh
    cd frontend
    npm install
    ```
  
3. Install dependencies for the backend:
    ```sh
    cd server
    npm install
    ```
4. Create a ```.env``` file in the server directory and add your ```MongoDB URI```:
   ```sh
   MONGODB_URI=your-mongodb-uri
   ```

### Running the Application
1. Start the backend server:
   ```sh
   cd server
   npm start
    ```

2. Start the frontend development server:
     ```sh
   cd frontend
   npm start
    ```

4. Open your browser and navigate to ```http://localhost:3000```

## Features
- **User authentication (sign up, log in)**
- **Create, edit, and delete notes**
- **Pin/unpin notes**
- **Responsive design**

## License
**This project is licensed under the MIT License - see the [LICENSE](https://github.com/Souvik34/Scribbly/blob/main/LICENSE "Click to view License")
 for details.**
