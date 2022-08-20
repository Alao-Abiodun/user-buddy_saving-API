import express, { Application, Request, Response } from 'express';
import routes from './api/routes';
// import sequelizeConnection from './db/config';

const app:Application = express();

const PORT: number | string = process.env.PORT ?? 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// // test sequelize sequelizeConnection
// sequelizeConnection.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
// }).catch(err => {
//         console.error('Unable to connect to the database:', err);
// })

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the Buddy Savings API! available at http://localhost:${PORT}/api/v1` })
})

app.use('/api/v1', routes);

try {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}