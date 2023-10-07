import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: "postgres",
    password: "testdbpass",
    host: "localhost",
    port: 5432,
    database: "users"
});