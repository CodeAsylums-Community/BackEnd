# Backend

![CodeAsylums](https://i.ibb.co/6wyhHNc/Code-Asylums-Community-1.png)

## Task 1

> Make a rest API for Sign In and Sign Up with Token Authentication.

## Description

This is a submission for task 1. I have implmentated token based authentication.

## Installing Dependencies

- Make sure that you have [Node](https://nodejs.org/en/) installed.
- Run `npm install` in the root directory of the project.

## Instructions to run

- Install all the required dependencies.
- `npm run dev` to run the application in Development mode.
- `npm run start` to run the application in production mode.

## Enviornment Variables

Take a look at .env.sample to know all about the required environment variables.

## Database Setup

MongoDB is used for storing the crendentials. It is a NoSQL document database. To run the application you will need a local or remote instance of MongoDB running and its URI.

## Endpoints

`POST /api/login`

- Use this endpoint to login. You will receive JWT token in response.
- A JSON object with Username and Password are required.
- Returns: A JSON object with JWT token, username and name fields.

```URL
curl http://127.0.0.1:3001/api/login -X POST -H "Content-Type: application/json" -d '{"username":"iamsaumya", "password": "iamsaumya"}'
```

```JSON
{
    "token": "eyJhbGciVCJ9.eyJ1c2VybmFtZSI6ImlhbXNhdWaWF0IjoxNjAyMjQ0NjgxfQ.3fYxt_h8mmvbdykDoOzA8Rb3nBov-YFXJChMbVM8-eM",
    "username": "iamsaumya",
    "name": "Saumya Pandey"
}
```

`POST /api/signup`

- Use this endpoint to create an account.
- A JSON object with Name, Username and Password is required.
- Returns: A JSON object with Name, Username and Id of the user.

```URL
curl http://127.0.0.1:3001/api/signup -X POST -H "Content-Type: application/json" -d '{"username":"username", "password": "iamsaumya" , "name" : "Saumya Pandey"}'
```

```JSON
{
    "name": "Saumya Pandey",
    "username": "username",
    "id": "5f80510654dc5426745fa684"
}
```

## Contributors

- [Saumya Pandey](https://github.com/iamsaumya)
