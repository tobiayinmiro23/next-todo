# next-todo

A news website built with react, typescript, vite, tailwind, typescript, shadcn and newsdata.io API.

## 🚀 Features

- responsive UI
- loader
- error handling
- view all todos functionality
- edit todos functionality
- delete todos functionality


## 📋 Prerequisites

- Node.js >= 18
- npm or yarn


## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobiayinmiro23/next-todo.git
   ```

2. **Enter the directory**
   ```bash
   cd next-todo
   ```
   
3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE = <your-mongoDB-database-name>
   USERNAME = <your-mongoDB-username>
   PASSWORD = <your-mongoDB-password>
   
   ```
   
5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```

├── app/                # Main source code
     └── api/           # constains backend code
          └── todo/     # contains API for the todo end point 
├── components/          # Reusable UI components
├── models/              # database models
├── public/              # static assets    
├── types/               # Contains all the types used
├── utils/              # Helper functions
└── README.md            # Project documentation

```


## 📦 Dependencies

- **tailwind css**:  *for styling html elements*
- **bcrypt**:  *for hashing passwords and sensitive information*  
- **mongodb**:  *for database*
- **mongoose**:  *an Object Data Modeling (ODM) library for Node.js for structuring and managing data in MongoDB using JavaScript*


## 📝 Environment Variables
```env
- `DATABASE`: <your-mongoDB-database-name>
- `USERNAME`: <your-mongoDB-username>
- `PASSWORD`:  <your-mongoDB-password>
- `SECRETEKEY`: <your-secrete-jwt-key>
   ```

