const AutorController = require('../controllers/autor.controller');

module.exports = (app)=>{
app.get('/api/autores', AutorController.getAutores)
app.get('/api/autores/:id', AutorController.getAutorById)
app.post('/api/autores', AutorController.createAutor)
app.put('/api/autores/:id', AutorController.actualizarAutor)
app.delete('/api/autores/:id', AutorController.deleteAutor)
}