#testapp
This simple app is defined by API_URL and PROTOCOL.
By default, this container serves on port 8080. However, this can be configured via the PORT environmental variable.

Running Locally

Assuming the app is running on localhost on port 3000, the API_URL is "helloworld.com" and the PROTOCOL accepts any string value, it can be run locally with the following command in the root of the repository.
API_URL="helloworld.com" PROTOCOL="helloWorld" PORT=3000 node app.js
