module.exports = (sequelize, DataTypes) => {
    const SchoolProfile = sequelize.define('school_profile', {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      school_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profile_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      foreign_teacher_lesson:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_book:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      note:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return SchoolProfile;
  }
  