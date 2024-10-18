import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
    unique: true, // propiedad que no deja cargar otro producto del mismo nombre
  },
  Precio: {
    type: Number,
    required: true,
    minLength: 50,
    maxLength: 1000000,
  },

  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {}, // falta estructura imagen
    },
  },

  categoria: {
    type: String,
    required: true,
    enum: ["Arte", "cuadernos", "Escritura", "Hojas"], // variable para multiples opciones fija en el front
  },

  marca: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },

  descripcion_breve: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  descripcion_amplis: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 1000,
  },
});

// crear modelo de dato 

const Producto = mongoose.model('producto', productoSchema);

export default Producto 
