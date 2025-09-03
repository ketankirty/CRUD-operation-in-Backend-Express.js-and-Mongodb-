import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors"

const app = express();

app.use(bodyParser.json())
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {

    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);

    })
    })
    .catch((err) => {
    console.error(err);


});

app.use("/api", route)

