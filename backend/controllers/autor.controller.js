const Autor = require("../models/autores.model");

module.exports.getAutores = (req, res) => {
  Autor.find()
  .sort({ name: 1 })
    .then(autores => res.status(200).json(autores))
    .catch(err => res.status(404).json({msg: "error al consultar los autores",err}))

};

module.exports.getAutorById = (req, res) => {
  Autor.findById({_id: req.params.id})
    .then(autor => res.status(200).json(autor))
    .catch(err => res.status(404).json({msg: "error al consultar el autor",err}))

};

module.exports.createAutor = (req,res)=>{
  Autor.create(req.body)
    .then(autor => res.status(200).json(autor))
    .catch(err => res.status(404).json({msg: "error al crear el autor",err}))
}

module.exports.actualizarAutor = (req,res)=>{
  const { name } = req.body;
  if (name && name.length <= 3) {
    return res.status(400).json({ error: 'El campo de texto debe tener más de 3 caracteres' });
  }


  Autor.findByIdAndUpdate({_id: req.params.id},{name: req.body.name}, {new: true})
    .then(autorAct => res.status(200).json(autorAct))
    .catch(err => res.status(404).json({msg: 'error al actualizar el autor',err}))
}

module.exports.deleteAutor = (req,res)=>{
  Autor.findByIdAndDelete({_id: req.params.id})
    .then(()=> res.json())
    .catch(err => res.status(404).json({msg: 'error al eliminar el autor', err}))
}

