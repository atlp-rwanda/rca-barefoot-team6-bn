# select your base image to start with
FROM node:18-alpine

# this is the location where you will be inside the container
WORKDIR /usr/src/app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# Bundle app source
COPY . .

# Necessary for your browser to send HTTP requests to your Node app
EXPOSE 8080

# Command to run when the container is ready
CMD [ "npm", "run", "dev"]