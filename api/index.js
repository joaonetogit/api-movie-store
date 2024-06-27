import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(
  cors({
    methods: ["GET", "PUT", "POST", "DELETE"],
  }),
);

app.use(express.json());

app.use(router);

mongoose
  .connect(
    "mongodb+srv://joaoneto:bMxoHjO1HrdvQ6Lv@cluster0.blbxvay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas: ", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
