const mongoose = require('mongoose')

let EmpleadoSchema = new mongoose.Schema({
    tipodoc: String,
    Id: Number,
    nombre: String,
    apellido: String,
    direccion: String,
    email: String,
    telefono: String,
    celular: String,
    url: String,
    descripcion: String,
  });

  module.exports = mongoose.model('empleado', EmpleadoSchema, 'Empleados');