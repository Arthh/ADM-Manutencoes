import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  password: 'docker',
  database: 'admmanutencoes',
  host: 'localhost',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
});

export default pool;