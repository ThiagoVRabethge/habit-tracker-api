import 'dotenv/config';
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.CONN_STRING
})

export default pool;