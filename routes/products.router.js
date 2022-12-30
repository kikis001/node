const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    products: [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
      { name: 'Bob', age: 22 },
    ],
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, name: 'Product 2', price: 2000 });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params.id;
  const body = req.body;
  res.status(202).json({
    id,
    data: body,
    message: 'update',
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params.id
  res.json(`deleted ${id}`)
})

module.exports = router;
