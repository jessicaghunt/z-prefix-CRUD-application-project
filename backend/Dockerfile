# Use Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the API port
EXPOSE 3001

# Start the API server
CMD ["node", "server.js"]