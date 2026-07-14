# Stage 1: Build the React Application
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy over your package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project files
COPY . .

# Build the Vite app for production
RUN npm run build


# Stage 2: Serve the App with Nginx
FROM nginx:alpine

# Copy the built files from Stage 1 into the Nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]