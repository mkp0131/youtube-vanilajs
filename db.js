import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("👽 db connect");
const handleError = (error) => console.log("🤬 db error" + error);

db.once("open", handleOpen);
db.on("error", handleError);
