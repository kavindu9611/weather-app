import express from "express";
import dotenv from 'dotenv'
import weatherRoutes from './routes/weather';
import cors from 'cors';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/weather', weatherRoutes);

app.listen(PORT,()=>{
  console.log(`Backend running at http://localhost:${PORT}`)
})