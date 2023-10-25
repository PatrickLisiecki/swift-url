"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class URL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  URL.init(
    {
      long: { type: DataTypes.STRING, allowNull: false },
      short: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "URL",
    },
  );
  return URL;
};
