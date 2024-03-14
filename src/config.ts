import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config();
}

const config = {
    PORT: process.env.PORT || "",
    NODE_ENV: process.env.NODE_ENV || "",
    MYSQL_URI: process.env.MYSQL_URI || ""
}

export default config;