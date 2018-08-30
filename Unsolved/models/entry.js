module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    log: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Entry.associate = function(models) {
    // We're saying that a Pet should belong to an Owner
    // A Pet can't be created without an Owner due to the foreign key constraint
    Entry.belongsTo(models.Pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};