# Simple Node Web App

This is a minimal Node.js web application using Express. It responds with a friendly message on the root route and is containerized using Docker.

---

## 🚀 Features

- Lightweight Express server
- Dockerized for easy deployment
- Runs on port `8081`

---

## 🗂 Project Structure
 ├── Dockerfile
 ├── index.js
 |── package.json


---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (if running locally)
- [Docker](https://www.docker.com/) (for containerized setup)

---

## 💻 Running Locally

```bash
npm install
npm start
```

- Then open your browser and go to: http://localhost:8081

---

## 🐳 Running with Docker

- Step 1: Build the Docker image

```bash
  docker build -t simple-node-app .
```

- Step 2: Run the Docker container

```bash
docker run -p 8081:8081 simple-node-app
```

---

## 📄 License
This project is for learning and demonstration purposes only.
