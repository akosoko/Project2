module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Pet.associate = function(models) {
    // We're saying that a Pet should belong to an Owner
    // A Pet can't be created without an Owner due to the foreign key constraint
    Pet.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};