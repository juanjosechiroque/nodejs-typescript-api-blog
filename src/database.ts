import { Sequelize } from "sequelize";

import config from "./config";

const sequelize = new Sequelize(config.MYSQL_URI);

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con éxito.');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err.message);
    });

export default sequelize;