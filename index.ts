import cors from 'cors';
import express from 'express';

export const app = express();

//Configure CORS
app.use(cors());

// Middleware and other setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port
let port = 3200;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/', (req: any, res: any) => {
    res.send("Server running successfully");
});