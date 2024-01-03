# Authentication Server:
- HTTP server in Node.js which will handle the logic of an authentication server.
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
