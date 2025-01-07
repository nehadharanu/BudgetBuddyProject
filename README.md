# BudgetBuddy

<div align="center">

  <h2 align="center">BudgetBuddy</h2>

  <p align="center">
    An app designed to help you manage your personal finances efficiently.
    <br />
    <a href="https://github.com/your-username/BudgetBuddy/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://your-live-app-url.com/">View Demo</a>
    ·
    <a href="https://github.com/your-username/BudgetBuddy/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-username/BudgetBuddy/issues">Request Feature</a>
  </p>
</div>

## Introduction

BudgetBuddy is a personal finance management application designed to help users track and manage their expenses, set budgets, and visualize their spending habits through charts and graphs. It is built with the MERN stack (MongoDB, Express, React, Node.js) and aims to provide a simple and intuitive interface for better financial management.

## Key Features

- Track income and expenses
- Set monthly or annual budgets
- Visualize spending patterns with graphs
- Categorize expenses (e.g., Food, Transportation, Entertainment)
- Secure authentication and user management
- Responsive design for desktop and mobile
- Automated Expense Entry from Bill Images: Upload bill images to auto-populate expense details.
- Admin Functionalities to manage users

## Technologies Used

This project was created using the following technologies:

#### Frontend

- React.js
- Redux (for state management)
- Axios (for making API calls)
- Material UI (for UI components)
- Chart.js (for visualizing data)
- React-chartjs-2 (React wrapper for Chart.js)

#### Backend

- Express.js
- Node.js
- JWT (for authentication)
- bcryptjs (for password hashing)
- Mongoose (for interacting with MongoDB)

#### Database

- MongoDB (MongoDB Atlas)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal - Setup Clinet

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```

For setting up backend (root directory)

- create a .env file in the root of your directory.
- Supply the following credentials

```
PORT=3001
MONGODB_URI=
ACCESS_TOKEN_SECRET=

```

Provide some random key in ACCESS_TOKEN_SECRET or you could generate one using node enter the below command in the terminal to genrate a random secret key

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

In the second terminal (\*in the project root directory (back-end))

```
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```
