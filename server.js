import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/Routes.js'; // ✅ .js extension

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}! http://localhost:${port}`));
