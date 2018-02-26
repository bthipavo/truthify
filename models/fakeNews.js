module.exports = function (sequelize, DataTypes) {
	let fakeNews = sequelize.definte("fakeNews",
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
					fakeNews.belongsTo(models.Users, {
						onDelete: "CASCADE",
						foreignKey: {
							allowNull: true
						}
					});
				}
			}
		}
	});
	return fakeNews;
};