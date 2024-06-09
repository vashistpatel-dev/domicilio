import express from 'express';

const app = express(); // Create an Express application
const port = 3000; // Definig the port number for the server

app.get('/', (req, res) => { // Defining a route handler for default home page ('/')
    res.send('Hello World!');
});

app.listen(port, () => { // Start server and listen to the port
    // Log message when server is up and running 
    console.log(`server is running on http://localhost:${port}`);
});