"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // Create an Express application
const port = 3000; // Definig the port number for the server
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    // Log message when server is up and running 
    console.log(`server is running on http://localhost:${port}`);
});
