const express = require('express');
const app = express();
const port = 6117;

app.get('*', (req, res) => {
    const ipAddress = req.ip || req.connection.remoteAddress;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>IP Address</title>
        </head>
        <body>
            <h1>Your IP Address is: ${ipAddress}</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

