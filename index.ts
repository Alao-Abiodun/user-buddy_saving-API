import express, { Application, Request, Response } from 'express';

const app:Application = express();

const PORT: number | string = process.env.PORT ?? 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${PORT}/api/v1` })
})

try {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}