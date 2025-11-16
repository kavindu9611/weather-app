import express from "express";
import dotenv from 'dotenv'
import weatherRoutes from './routes/weather';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/api/weather', weatherRoutes);

app.listen(PORT,()=>{
  console.log(`Backend running at http://localhost:${PORT}`)
})