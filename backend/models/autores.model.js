const mongoose = require("mongoose");

const AutorsSchema = new mongoose.Schema({
  name: { type: String,
          required: [true,"El nombre es requerido"],
          minlength: [3, 'El campo de texto debe tener al menos 3 caracteres']
  },
},{timestamps: true});



const Autor = mongoose.model('Autor', AutorsSchema);

module.exports = Autor;
