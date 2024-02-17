import express from 'express';
import authRoutes from './routes/auth.route';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes);
app.listen(3000);