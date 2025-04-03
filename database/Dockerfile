# Use the official PostgreSQL image as the base
FROM postgres:latest

# Set the environment variable for PostgreSQL password
ENV POSTGRES_PASSWORD=docker

# Define the volume for persistent data storage
VOLUME $HOME/docker/volumes/postgres:/var/lib/postgresql/data

# Expose PostgreSQL default port
EXPOSE 5432

# Set the default command to run PostgreSQL
CMD ["postgres"]