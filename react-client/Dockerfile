# Use an official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use an official nginx image as the base for serving the built files
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the custom port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
