# Authentication Server:
- HTTP server in Node.js which handles the logic of an authentication server.
- Save the users and their signup/login data in an array in a variable.
- To test the server - run `npm run test-authServer` command in terminal
## API Endpoints:
- ### POST /signup
  - Allows users to create an account. This should be stored in an array on the server.
  - **Request Body:** JSON object with username, password, firstName and lastName fields.
  - **Response:** 201 Created if successful, or 400 Bad Request if the username already exists.
- ### POST /login
  - Gets user back their firstname, lastname and email.
  - **Request Body:** JSON object with username and password fields.
  - **Response:** 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
- ### GET /data
  - Fetch all user's names and ids from the server
  - **Response:** 200 OK with the data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.


# File Server:
- HTTP server in Node.js which handles the logic of a file server using builtin `fs` module.
## API Endpoints:
- ### GET /files
  - Returns a list of files present in `./files/` directory
  - **Response:** 200 OK with an array of file names.
- ### GET /file/:filename
  - Returns content of file given in param filename.
  - **Response:** 200 OK with the file content if file is found else 404 `File not found`.
 
# Todo Server:
- Storing all the data in an array to store the todo list data (in-memory).
## API Endpoints: 
- ### GET /todos
  - Returns a list of all todo items
  - **Response:** 200 OK with an array of todo items in JSON format.
- ### GET /todos/:id
  - Returns a specific todo item identified by its ID.
  - **Response:** 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
- ### POST /todos
  - Creates a new todo item.
  - **Request Body:** JSON object representing the todo item.
  - **Response:** 201 Created with the ID of the created todo item in JSON format 
- ### PUT /todos/:id
  - Updates an existing todo item identified by its ID.
  - **Request Body:** JSON object representing the updated todo item.
  - **Response:** 200 OK if the todo item was found and updated, or 404 Not Found.
- ### DELETE /todos/:id
  - Deletes a todo item identified by its ID.
  - **Response:** 200 OK if the todo item was found and deleted, or 404 Not Found
 
# Todo Server (File):
- Storing all the data in `todo.json` file.
