import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: "postgres",
    password: "aezakmi1029345",
    host: "localhost",
    port: 5432,
    database: "users"
});