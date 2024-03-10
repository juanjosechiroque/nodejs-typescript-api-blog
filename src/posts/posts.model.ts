import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: {
        type: DataTypes.STRING,
        defaultValue: "draft"
    }
}, {
    sequelize,
    timestamps: true,
    modelName: "Post"
});

export default Post;