
MEAN Stack Todo App with Multer and CORS


This is a simple Todo application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js) with TypeScript. The server-side application is equipped with Multer for handling file uploads, and CORS is configured to allow cross-origin resource sharing.

Technologies Used
MongoDB: A NoSQL database for storing Todo items.
Express.js: A Node.js framework for building the server-side application.
Angular: A front-end framework for building the user interface.
Node.js: A runtime environment for running the server-side application.
TypeScript: A superset of JavaScript that adds static typing.
Multer: A middleware for handling file uploads.
CORS: Cross-Origin Resource Sharing middleware for enabling secure cross-origin requests.
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js and npm: Node.js Download
MongoDB: MongoDB Download
Angular CLI: Install globally using npm install -g @angular/cli
Setup
Clone the Repository:


git clone https://github.com/your-username/mean-todo-app.git
Navigate to the Server Directory:


cd mean-todo-app/server
Install Server Dependencies:

npm install
Start the Server:

npm start
Navigate to the Client Directory:


cd ../client
Install Client Dependencies:


npm install
Start the Angular App:


ng serve
Open Your Browser:

Client: http://localhost:4200
Server: http://localhost:3000
Configuration
Multer Configuration:

Multer is configured in the server/src/middleware/multer.ts file.
You can adjust Multer settings based on your requirements.
CORS Configuration:

CORS is configured in the server/src/middleware/cors.ts file.
Adjust CORS settings in this file if needed.
Usage
Visit the client application in your browser and start managing your Todo items.
The Angular app communicates with the Node.js server, which, in turn, interacts with the MongoDB database.
Features
Create, Read, Update, and Delete Todo items.
Real-time updates using Angular's two-way data binding.
File uploads using Multer for attachments.
Secure cross-origin requests with CORS.
Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. Follow the Contributing Guidelines.

License
This project is licensed under the MIT License.
