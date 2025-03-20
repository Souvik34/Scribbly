# ✏️ Scribbly

Scribbly is a 📝 web application for managing notes. It allows users to create, edit, and delete notes, as well as sign up and log in to their accounts.  

## 🚀 Tech Stack  

### Frontend  
- **⚛️ React**: A JavaScript library for building user interfaces.  
- **🎨 Tailwind CSS**: A utility-first CSS framework for rapid UI development.  
- **🔀 React Router**: A library for routing in React applications.  
- **⭐ React Icons**: A library for including popular icons in React projects.  
- **🗃️ Redux Toolkit**: A state management tool for efficient and scalable Redux-based apps.  

### Backend  
- **🟢 Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.  
- **🚏 Express**: A minimal and flexible Node.js web application framework.  
- **🍃 Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.  
- **🔐 dotenv**: A module to load environment variables from a `.env` file.  
- **🍪 cookie-parser**: A middleware to parse cookies.  
- **🌍 cors**: A middleware to enable Cross-Origin Resource Sharing.  

### Database  
- **🛢️ MongoDB**: A NoSQL database for storing application data.  

## 🛠️ Getting Started  

### Prerequisites  
- 🟢 Node.js  
- 📦 npm (Node Package Manager)  
- 🍃 MongoDB  


### 🛠 Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/scribbly.git
   cd scribbly
2. Install dependencies for the frontend:
   ```sh
   cd frontend
   npm install
   
3. Install dependencies for the backend:
   ```sh
   cd server
   npm install

4. Create a ```.env file``` in the ```server``` directory and add the following:
   ```sh
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

## ▶️ Running the Application
1. Start the backend server:
   ```sh
    cd server
    npm start
   ```
2. Start the frontend development server:
  ```sh
    cd frontend
    npm run dev
   ```
4. Open your browser and navigate to ```http://localhost:5173```

## 🔑 API Routes  

### 🔐 Authentication Routes (`/api/auth`)  

| Method | Endpoint      | Description                      | Authentication |
|--------|-------------|----------------------------------|---------------|
| `POST` | `/signup`   | User registration               | ❌ No        |
| `POST` | `/signin`   | User login                      | ❌ No        |
| `GET`  | `/signout`  | Logout                          | ✅ Yes       |

### 📝 Notes Routes (`/api/note`)  

| Method  | Endpoint             | Description            | Authentication |
|---------|----------------------|------------------------|---------------|
| `POST`  | `/add`               | Add a new note        | ✅ Yes       |
| `POST`  | `/edit/:noteId`      | Edit a note           | ✅ Yes       |
| `GET`   | `/all`               | Get all notes         | ✅ Yes       |
| `DELETE`| `/delete/:noteId`    | Delete a note         | ✅ Yes       |
| `PUT`   | `/update-pin/:noteId`| Pin/unpin a note      | ✅ Yes       |

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and contribute. 🚀

## 📜 License

This project is **open-source** and available under the **MIT License**.



