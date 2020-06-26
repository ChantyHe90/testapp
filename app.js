console.log(process.env.NODE_ENV)
const http = require("http");
const NODE_ENV = process.env.NODE_ENV || "[NODE_ENV]";
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
    <h1>You use: ${NODE_ENV}</h1>
    <pre style="color: red;" id="error-message"></pre>

    </body>
    </html>`);
});

httpServer.listen(process.env.PORT || '8080');
