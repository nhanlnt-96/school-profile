module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        adminId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Users;
}
