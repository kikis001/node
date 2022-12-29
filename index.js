const express = require('express');


const router = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json({
    users: [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
      { name: 'Bob', age: 22 },
    ],
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Jane',
    age: 21
  })
})

app.get("/users/:id/tasks/:idT", (req, res) => {
  const { id , idT } = req.params;
  res.json({
    id,
    idT,
    name: 'Jane',
    age: 21
  })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
