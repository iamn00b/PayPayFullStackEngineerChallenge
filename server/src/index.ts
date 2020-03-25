import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/api', (_req, res) => res.json({ data: 'Hello World!' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
