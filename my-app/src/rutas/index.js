const usuarios = require("./controllers/usuarios");


module.exports = (app) => {
  app.use("/usuarios", usuarios);

};
