import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config();

const isTest = process.env.NODE_ENV  === 'test';

const dbName = isTest ? process.env.TEST_DB_NAME as string : process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD as string

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
})

// test Connection
sequelizeConnection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

export default sequelizeConnection