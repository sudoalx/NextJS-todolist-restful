# Admin tools

Simple admin tools demo web app for practicing with React, Redux, Next.js.

## Development

This is the development environment setup needed to run the admin tools in development mode.

### Database setup

The admin tools use a PostgreSQL database. The easiest way to get a PostgreSQL database up and running is to use Docker.

- Run docker
Run the following command to start a PostgreSQL database in a Docker container:

    ```bash
    docker-compose up -d
    ```

- Create the database
Run the following command to create the database with prisma:

    ```bash
    pnpm dlx prisma init
    pnpm dlx prisma migrate dev --name init
    ```

- Execute the database seed

Make a GET request to the following endpoint to seed the database (you can just use your browser for this):

    ```bash
    http://localhost:3000/api/seed
    ```

    
