module.exports = function (sequelize, DataTypes) {
	let News = sequelize.definte("News",
	{
		userId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: false
		},
		snippet: {
			type: DataTypes.STRING,
			defaultValue: false
		},
		src: {
			type: DataTypes.STRING,
			defaultValue: false
		},
		publishDate: {
			type: DataTypes.STRING,
			defaultValue: false
		}, {
			classMethods: {
				associate: function (models) {
					News.belongsTo(models.Users, {
						onDelete: "CASCADE",
						foreignKey: {
							allowNull: true
						}
					});
				}
			}
		}
	});
	return News;
};