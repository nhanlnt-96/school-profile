module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('user', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Users.associate = (models) => {
    Users.hasMany(models.school_profile, {as: 'school_profile_id'});
  };
  return Users;
}
