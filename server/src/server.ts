import express from 'express';

const app = express();

// API RESTful

/* 
  # HTTP methods 

  * GET: leitura
  * POST: criação
  * PUT: editar uma entidade por completo
  * PATCH: editar informação específica dentro de um entidade
  * DELETE: deletar uma entidade
*/

/* 
  # HTTP codes
  * 2: sucesso
  * 3: redirecionamento 
  * 4: erro gerado pela aplicação
  * 5: erro inesperado
*/

/* 
  # Params:
  * Params:
  * Query:
  * Body: 
  
*/

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' }
  ]);
});

app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);
