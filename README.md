# Admin tools

Simple admin tools demo web app for practicing with React, Redux, Next.js, Server side and client side cookies, JWT, Prisma, session management, and more.

## Development

This is the development environment setup needed to run the admin tools in development mode.

### Database setup

The admin tools use a PostgreSQL database. The easiest way to get a PostgreSQL database up and running is to use Docker.

1. Install dependencies

    ```bash
    pnpm install
    ```

2. Run docker
Run the following command to start a PostgreSQL database in a Docker container:

    ```bash
    docker-compose up -d
    ```

3. Setup .env file
Copy the `.env.sample` file to `.env` and fill in the values for the database connection.

    ```bash
    cp .env.sample .env
    ```

4. Create the database
Run the following command to create the database with prisma:

    ```bash
    pnpm dlx prisma init
    pnpm dlx prisma migrate dev --name init
    ```

5. Execute the database seed

Make a GET request to the following endpoint to seed the database (you can use your browser for this): <http://localhost:3000/api/seed>

### Run in development mode

Run the following command to start the app in development mode:

```bash
pnpm dev
```
