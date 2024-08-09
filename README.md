# MERN Stack Class Notes

## Technologies Used

- **HTML/CSS/JavaScript:** Basic front-end technologies.
- **Node.js:** JavaScript runtime for building the server-side of the application.
- **Express.js:** Web framework for Node.js to handle routing and HTTP requests.
- **MongoDB:** NoSQL database for storing student data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.

## Front-End Explanation

### `index.html`

This file includes examples of basic JavaScript functionalities such as:

- **Event Handling:** Demonstrates how to handle various events such as `onclick`, `onchange`, `onmouseover`, and `onmouseleave`.
- **Form Handling:** Basic example of form input, email, and password validation using regex.
- **Addition Function:** A simple addition function that takes two numbers from input fields and displays the result.

### `index.js`

This file includes JavaScript functions linked to the HTML file:

- **Addition Function (`add`):** Adds two numbers entered by the user.
- **Email Verification (`verify`):** Checks if the entered email matches the regex pattern.
- **Password Verification (`passverify`):** Validates if the password meets certain criteria (length, inclusion of uppercase, lowercase, number, and special character).
- **Form Validation:** Validates user input in the form before submission.

## Back-End Explanation

### `controller.js`

This file contains the logic for handling CRUD operations related to the student data:

- **Create:** Adds a new student to the database if they do not already exist.
- **Read:** Fetches details of a student based on their roll number.
- **Update:** Updates student details based on their roll number.
- **Delete:** Deletes a student record based on their roll number.

### `routes.js`

This file defines the routes for handling HTTP requests:

- **`/`:** Basic home route that returns a simple message.
- **`/test`:** A test route to verify POST requests.
- **`/addstudent`:** POST route to add a new student using the `create` function.
- **`/studentinfo`:** GET route to fetch student details using the `read` function.
- **`/studentupdate`:** PUT route to update student details using the `update` function.
- **`/studentdelete`:** DELETE route to delete a student using the `deletestud` function.

### `schema.js`

Defines the Mongoose schema for the student model:

- **`name`:** The name of the student (required).
- **`rollno`:** The roll number of the student (required).
- **`department`:** The department of the student (required).
- **`city`:** The city of the student (required).

### `server.js`

This file sets up the Express server and connects to MongoDB:

- **CORS:** Cross-Origin Resource Sharing is enabled to allow requests from different origins.
- **Routes:** The routes defined in `routes.js` are used here.
- **Database Connection:** Connects to a MongoDB instance running locally.

## Roadmap

### 1. **HTML, CSS, and JavaScript**
   - **HTML:** Structure your web pages with HyperText Markup Language.
     - [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
     - [W3Schools Docs - HTML](https://www.w3schools.com/html/default.asp)
   - **CSS:** Style your web pages with Cascading Style Sheets.
     - [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
     - [W3Schools Docs - CSS](https://www.w3schools.com/css/default.asp)
   - **JavaScript:** Make your web pages interactive.
     - [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
     - [W3Schools Docs - JavaScript](https://www.w3schools.com/js/default.asp)

### 2. **HTTP and API Handling**
   - **HTTP Basics:** Understand the foundation of web communication.
     - [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
   - **APIs:** Learn how to interact with web services using APIs.
     - [RESTful APIs](https://www.restapitutorial.com/)
     - [MDN Web Docs - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### 3. **Database Management Systems (DBMS)**
   - **DBMS Concepts:** Learn about databases and how they manage data.
     - [Database Systems: Concepts, Design, and Applications](https://www.tutorialspoint.com/dbms/index.htm)
   - **SQL vs NoSQL:** Understand the differences between SQL and NoSQL databases.
     - [SQL vs NoSQL Databases](https://www.mongodb.com/nosql-explained)

### 4. **MongoDB**
   - **Introduction to MongoDB:** Explore NoSQL databases and MongoDB basics.
     - [MongoDB Documentation](https://docs.mongodb.com/)
     - [MongoDB University](https://university.mongodb.com/)

### 5. **Node.js and Express.js**
   - **Node.js:** Learn server-side JavaScript and build scalable network applications.
     - [Node.js Official Documentation](https://nodejs.org/en/docs/)
     - [MDN Web Docs - Introduction to Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)
   - **Express.js:** A web framework for Node.js, simplifying the server creation process.
     - [Express.js Documentation](https://expressjs.com/)
     - [Express.js Guide](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

### 6. **React.js**
   - **React.js Basics:** Learn the fundamentals of React, a powerful front-end library.
     - [React Official Documentation](https://reactjs.org/docs/getting-started.html)
     - [React for Beginners](https://www.codecademy.com/learn/react-101)
