module.exports = function (sequelize, DataTypes) {
  var Article = sequelize.define("Article",
  {
    source: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    url: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    urlToImage: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    publishDate: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    isFake: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
            classMethods: {
        associate: function (models) {
          Article.belongsTo(models.Users, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    });
  return Article;
};