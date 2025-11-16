import dotenv from "dotenv";
dotenv.config();
import express from "express";
import weatherRoutes from "./routes/weather";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}));

app.use(express.json());

app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
