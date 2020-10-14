# Backend

![CodeAsylums](https://i.ibb.co/6wyhHNc/Code-Asylums-Community-1.png)

## Task 2

> Scrape the link: <http://quotes.toscrape.com/page/1> to get all the quotes in the given web page and make a REST API.Optional Task: Do the above task for the first 10 pages in the link. Save the data in a database

## Description

This is a submission for task 3. I scrapped this [site](http://quotes.toscrape.com/) and saved its quotes in the db. Everytime you run the application all the quotes are deleted from db and scrapped quotes are inserted.

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

`GET /api/quotes`

- Use this endpoint to get all the quotes.
- Returns: An array ofJSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/quotes
```

```JSON
[
    {
        "text": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        "id": "5f835141edfdea67421a7988"
    },
    {
        "text": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        "id": "5f835141edfdea67421a7989"
    },
    {
        "text": "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        "id": "5f835141edfdea67421a798c"
    }
]
```

`POST /api/quotes`

- Use this endpoint to add a quote.
- A JSON object with text field is required.
- Returns: A JSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/quotes -X POST -H "Content-Type: application/json" -d '{"text": "Euphoria!"}'
```

```JSON
{
    "text": "Euphoria!",
    "id": "5f809cf51eddad539e51e24b"
}
```

`PATCH /api/quotes/:id`

- Use this endpoint to update a quote.
- A JSON object with the text field is required.
- Returns: A JSON object with text and Id fields.

```URL
curl http://127.0.0.1:3001/api/quote/5f809cf51eddad539e51e24b -X PATCH -H "Content-Type: application/json" -d '{"text": "Euphoria"}'

```

```JSON
{
    "text": "Euphoria",
    "id": "5f809cf51eddad539e51e24b"
}
```

`DELETE /api/quotes/:id`

- Use this endpoint to delete a quote.
- Response has no content.

```URL
curl http://127.0.0.1:3001/api/quotes/5f809cf51eddad539e51e24b -X DELETE
```

## Contributors

- [Saumya Pandey](https://github.com/iamsaumya)
