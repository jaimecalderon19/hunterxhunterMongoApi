const mongoose = require('mongoose');

const cazadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: Number,
  altura: Number,
  peso: Number,
  imagen: String,
  genero: String,
  habilidades: [String],
  tipoLicencia: { type: String, enum: ['Triple Star', 'Double Star', 'Single Star', 'Novato'], default: 'Novato' },
}, { timestamps: true });

module.exports = mongoose.model('Cazador', cazadorSchema);