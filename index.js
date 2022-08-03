import express from 'express';

const app = express();
const port = 8081;

app.get('/', (req, res) => res.send('Labas'));

app.listen(port, () => console.log(`Starting server on port ${port}`));