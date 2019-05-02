import express from 'express';

// Express app
const app = express();

// Static assets
app.use(express.static('public'))

// Sample home page
app.get('/', (req, res) => res.send('Hello home page'));

// Start on port
app.listen(3000);

export default app;
