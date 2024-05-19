// lib/config.ts
import { createConnection, Connection } from 'mysql2';

const connection: Connection = createConnection({
  host: process.env.DB_HOST, // Replace with your InfinityFree MySQL server hostname
  user: process.env.DB_USER, // Replace with your database username
  password: process.env.DB_PASSWORD, // Replace with your database password
  database: process.env.DB_NAME, // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

export default connection;
