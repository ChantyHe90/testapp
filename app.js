console.log(process.env.API_URL)
const http = require("http");
const API_URL = process.env.API_URL || "[API_URL]";

// const QUOTE_SERVER_NAME = process.env.QUOTE_SERVER_NAME || "[QUOTE_SERVER_NAME]";
const PROTOCOL = process.env.PROTOCOL || false;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
    <style>
    *
    {
      font-family: ariel, sans-serif;
      text-align: center
    }
    
    </style>
    <body>
    <h1 id="text">You use: ${API_URL}</h1>
    <pre style="color: red;" id="error-message"></pre>
    <script>
    const protocol = ${PROTOCOL} || location.protocol;
    const quote_url = protocol + "//${PROTOCOL}";
    fetch(quote_url + "?t=" + Date.now()).then((response) => {
      return response
    }, (error) => {
      document.getElementById("error-message").textContent = "FAILED: GET " + quote_url;
    }).then((quote) => {
      document.getElementById("text").textContent = "You connected ${API_URL}"
    }, (error) => {
      document.getElementById("error-message").textContent = "REQUESTED: GET " + quote_url + "\\nFAILED: " + error;
    });
    </script>
    </body>
    </html>`);
});

httpServer.listen(process.env.PORT || '8080');
