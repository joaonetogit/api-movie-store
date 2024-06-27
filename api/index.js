import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import router from "./routes/index.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.use(json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
