# Base the image on the node base image
FROM node:10

# Define container where the app will be placed
WORKDIR /Users/humanitec/Desktop/ENV/env-vars
# Copy the app.js file into the working directory
COPY app.js .

# Define which port should be exposed on the container
EXPOSE 8080

# The command to run when the container starts
CMD ["node", "./app.js"]
