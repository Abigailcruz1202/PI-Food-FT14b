const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id:{
      type: DataTypes.UUID,   // Unique Universal IDentifier || IDentificaor Unico Universal
      defaultValue:DataTypes.UUIDV4,    //(.UUIDV1 o .UUIDV4 para hacer que sequelize genere los ids automáticamente)
      primaryKey: true    // declaramos primary key
    },
    name: {
      type: DataTypes.STRING
    }
  });
};