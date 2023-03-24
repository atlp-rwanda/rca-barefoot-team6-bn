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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
EXPOSE 3000
=======
EXPOSE 8080
>>>>>>> fb87bbf (chore(docker): create docker compose file)
=======
EXPOSE 3000
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
EXPOSE 3000
>>>>>>> f12e49c (chore(docker): expose app to the correct port)
=======
EXPOSE 3000
>>>>>>> 8d74a26 (feat: project structure initialization)

# Command to run when the container is ready
CMD [ "npm", "run", "dev"]