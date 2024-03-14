## React-todo-list-redux
This repository contains a todo-list application developed using React, TypeScript, Redux Toolkit, and bundled with Vite.

### Project Structure

The project is organized into two main parts:

#### Backend

The `server` directory contains code responsible for handling database interactions. All CRUD (Create, Read, Update, Delete) operations are processed here. Requests from the client-side application are forwarded to the backend, where they are handled and stored in a PostgreSQL database. Data exchange between the client and server occurs in JSON format.

In the env.txt file, there is a template for personal database access data that needs to be added locally when forking the project. Additionally, after cloning the project, it is necessary to create a database and apply migrations and seeds using Sequelize CLI. Here are the commands to execute in the terminal:

npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

To start the server, run `npm start`.

#### Frontend

The `client` directory contains code responsible for the user interface of the application. Here, the logic for interacting with the todo-list is implemented. The client-side code handles data display and user actions, transmitting them to the server.

To start the client-side server in development mode, run `npm run dev`.

Using React, TypeScript, and Redux Toolkit ensures scalability, ease of development, and efficient state management for the project.
