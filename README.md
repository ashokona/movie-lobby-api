
# Movie Lobby

A brief description of what this project does and who it's for


## Setup

1. Install Node v20.X.X or above
2. Install mongodb locally and create db with port 27017 and name 'movie-lobby-db'
3. If you want to skip installing mongodb locally create free cluster at https://www.mongodb.com/atlas/database with the same name as above
4. Install nodemon globaally for faster developemnt.
```bash
  npm install -g nodemon
```
5. Install git and vscode locally
## Run Locally

Clone the project

```bash
  git clone https://github.com/ashokona/movie-lobby-api.git
```

Go to the project directory

```bash
  cd movie-lobby-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Start the server for development

```bash
  npm run dev
```

Production build

```bash
  npm run build
```


## Note

If you want to skip installing mongodb locally or would like to use existing mongodb connection, please create a .env file and the url in the .env file in below format.

MONGODB_URL=<mongo url>