# Backend

![CodeAsylums](https://i.ibb.co/6wyhHNc/Code-Asylums-Community-1.png)

## Task 2

> A notes app with a REST API which does all 4 requests (GET, POST, PUT, DELETE).

## Description

This is a submission for task 2. I have implemented an API for notes app.

## Installing Dependencies

- Make sure that you have [Node](https://nodejs.org/en/) installed.
- Clone the repository to your localhost.
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

`GET /api/notes`

- Use this endpoint to get all the notes.
- Returns: An array ofJSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/notes
```

```JSON
[
    {
        "text": "Hii!",
        "id": "5f80473b62be0e15d6a9c86a"
    },
    {
        "text": "This is awesome!",
        "id": "5f80473b62be0e15d6a9c86b"
    }
]
```

`POST /api/notes`

- Use this endpoint to create a note.
- A JSON object with text field is required.
- Returns: A JSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/notes -X POST -H "Content-Type: application/json" -d '{"text": "Euphoria!"}'
```

```JSON
{
    "text": "Euphoria!",
    "id": "5f809cf51eddad539e51e24b"
}
```

`PATCH /api/notes/:id`

- Use this endpoint to update a note.
- A JSON object with the text field is required.
- Returns: A JSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/notes/5f809cf51eddad539e51e24b -X PATCH -H "Content-Type: application/json" -d '{"text": "Euphoria"}'

```

```JSON
{
    "text": "Euphoria",
    "id": "5f809cf51eddad539e51e24b"
}
```

`DELETE /api/notes/:id`

- Use this endpoint to delete a note.
- Response has no content.

```URL
curl http://127.0.0.1:3001/api/notes/5f809cf51eddad539e51e24b -X DELETE
```

## Contributors

- [Saumya Pandey](https://github.com/iamsaumya)
