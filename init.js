import db from "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`Listening on: 127.0.0.1:${PORT}`);
};

app.listen(PORT, handleListening);
