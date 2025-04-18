import express from "express"
import 'dotenv/config';
import auth from "./routes/auth.router.js"
import { dbConnection } from "./database/config.js";

const app = express()

dbConnection();

app.use(express.json())
app.use(express.static("public"))


app.use("/api/auth", auth)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})