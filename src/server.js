import express from 'express';

const app = express();
const port = process.env.applicationPort || 5000;

app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
