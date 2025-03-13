const express = require('express');
const app = express();
const port = 6117;

app.get('*', (req, res) => {
    // Get the client IP address
    const clientIp = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.ip;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>IP Address</title>
        </head>
        <body>
            <h1>Your Real IP Address is: ${clientIp}</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
