const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb+srv://indiakka:Pesadillaantesdenavidad2912@cluster0.c7dl5.mongodb.net/Usuarios?retryWrites=true", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión con DB correcta");
  } catch (error) {
    console.log("Error al conectarse a DB");
    console.log(error);
  }
};
module.exports = conexion;