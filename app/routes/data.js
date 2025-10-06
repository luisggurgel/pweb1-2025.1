var express = require('express');
var router = express.Router();

// Dados de exemplo em memória
let sampleData = [
  { id: 1, value: 'Primeiro dado' },
  { id: 2, value: 'Segundo dado' }
];

/* GET para obter todos os dados. */
router.get('/', function(req, res, next) {
  console.log('Alguém pediu os dados.');
  res.json(sampleData);
});

/* POST para adicionar novos dados. */
router.post('/', function(req, res, next) {
  const newData = req.body;
  
  // Simula a criação de um novo ID
  const newId = sampleData.length > 0 ? Math.max(...sampleData.map(d => d.id)) + 1 : 1;
  newData.id = newId;
  
  sampleData.push(newData);
  
  console.log('Novos dados recebidos:', newData);
  
  res.status(201).json({
    message: 'Dados adicionados com sucesso!',
    data: newData
  });
});

module.exports = router;
