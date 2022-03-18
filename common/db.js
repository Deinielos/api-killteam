import mysql from "mysql"

export const connection = mysql.createConnection({
    host: '80.34.34.150',
    user: 'warhammer',
    password: 'warhammer',
    database: 'warhammer',
    port: 8904
});
