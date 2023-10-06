import {Pool} from "pg";

const pool = new Pool({
    user: "postgres",
    password: "sDBd-w33#-@#$!-V)3F",
    host: "localhost",
    port: 5432,
    database: "fas_server_db"
});

module.exports = pool;