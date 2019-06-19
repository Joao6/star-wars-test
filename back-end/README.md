# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Clone the repo and then run `npm install`.

## Create .env file with your enviroment variables

Copy all lines of .env.example file and edit lines bellow:

```js
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=starwars
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Run development server

Run the following command to run startup migrations.

```js
adonis serve --dev
```

### Create new User (Postman or Isomnia)

Send a HTTP POST to http://localhost:3333/users, like so:

```js
{
  "username": "admin",
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Authentication (Postman or Isomnia)

Send a HTTP POST to http://localhost:3333/sessions, like so:

```js
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

