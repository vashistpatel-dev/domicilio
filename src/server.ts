import express, { Request, Response } from 'express';
import path from 'path';

const app = express(); // Create an Express application
const port = 3000; // Definig the port number for the server

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => { // Defining a route handler for default home page ('/')
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.listen(port, () => { // Start server and listen to the port
    // Log message when server is up and running 
    console.log(`server is running on http://localhost:${port}`);
});