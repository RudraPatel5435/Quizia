# Quiz App 🧠✨

Welcome to the Quiz App! This project is built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and provides an interactive platform for users to participate in quizzes.


## 🚀 Features

- **Using MERN Stack**
- **User-friendly Interface** 🎨  
- **MongoDB Atlas Integration** for data storage 🗄️
- 


## 🛠️ Installation and Setup

Follow these steps to set up the project on your local machine:

### 1.  Clone the Repository

```bash
git clone https://github.com/RudraPatel5435/Quizia.git
```

### 2. Install Dependencies for Backend

```bash
cd Quizia
npm i
```

### 3. Install Dependencies for Frontend

```
cd client
npm i
```

## 🌐 Setting up MongoDB Atlas

Your backend relies on **MongoDB Atlas** to store quiz data. Follow these steps to set it up:

### 1️⃣ Sign Up on MongoDB Atlas
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. Create an account (or log in if you already have one).

### 2️⃣ Create a Cluster
1. Click on **Create a Cluster**.
2. Choose a **M0** (free tier) and follow the on-screen instructions.
3. After creating the cluster, go to the **Database Access** tab.
4. Create a **new database user** with a username and password.

### 3️⃣ Configure Network Access
1. Go to the **Network Access** tab.
2. Allow access from **any IP address** or specify your IP range.

### 4️⃣ Get the Connection String
1. Navigate to the **Clusters** tab.
2. Click **Connect** > **Connect your application**.
3. Copy the provided **connection string**.

### 5️⃣ Create the Backend `.env` File

In the `backend` folder, create a `.env` file:
```bash
cd ../server
touch .env
```
   
### 6️⃣ Update `.env` File
Make environment variables to make the server work

```
MONGO_URI=<CONNECTION_STRING> => URI you copied from MongoDB Atlas (Don't forget to replace the password)
PORT=<PORT_NUMBER> => Port on which you wish to start backend server
```


### 4. Start the Servers

### 1️⃣ Start the backend server

```bash
npx nodemon server
```

### 2️⃣ Start the frontend server

```bash
cd ../client
npm run dev
```

### 5. Contributing 🙌

Feel free to fork this repository and contribute. All contributions are welcome! 🌟


Happy Coding! 🚀✨
   
