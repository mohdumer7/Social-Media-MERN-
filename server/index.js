import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/postsRoute.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", PostRoutes);
app.use("/users", userRoutes);
// const CONNECTION_URL =
// "mongodb+srv://mohammed_umer:5xZONYZgQqdyPP3N@socialmediamern.rufsm23.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running on Port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
