const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // no acepta campo vacio 
    },
    id:{
      type: DataTypes.UUID,   // Unique Universal IDentifier || IDentificaor Unico Universal
      defaultValue:DataTypes.UUIDV4,    //(.UUIDV1 o .UUIDV4 para hacer que sequelize genere los ids automáticamente)
      primaryKey: true    // declaramos primary key
    },
    summary:{//resumen
      type: DataTypes.TEXT, // tipo TEXT poque en tema de caracteres es mas amplio que tipo STRING que tiene 255
      allowNull: false
    },
    spoonacularScore:{// puntos
      type: DataTypes.INTEGER
    },
    healthScore:{//nieval de salud
      type: DataTypes.INTEGER
    },
    instructions:{//pasos
      type: DataTypes.TEXT
    }
  });
};
 