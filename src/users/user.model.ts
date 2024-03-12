import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: DataTypes.STRING,
    status: {
        type: DataTypes.STRING,
        defaultValue: "active"
    }
}, {
    sequelize,
    timestamps: true,
    modelName: "User"
});

export default User;