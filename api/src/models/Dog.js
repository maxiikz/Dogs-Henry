const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  /* - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida */

  const Dog = sequelize.define('dog', {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    ID:{
        type:DataTypes.INTEGER,
        primeryKey: true,
        autoIncrement: true
    },
    height:{type:DataTypes.INTEGER},
    weight:{type:DataTypes.INTEGER},
    agesoflife:{type:DataTypes.INTEGER}
  });
};
