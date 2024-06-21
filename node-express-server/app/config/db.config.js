const fs = require('fs');

const readSecret = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch (err) {
    console.error(`Error reading secret from ${filePath}:`, err);
    return null;
  }
};

const config = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: readSecret(process.env.DB_PASSWORD_FILE),
  DB: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = config;
