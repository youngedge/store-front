import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5173; // Change the port to 5173

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Dummy user credentials for demonstration purposes
const users = [
    { username: 'desmond001', password: 'b227b670a4c8b8294dca292375aa02d7e11b23d37aa82585f26c1689c4df16b6' } // Example hashed password
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
