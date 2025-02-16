import express from "express"
import courseRouter from "./routers/course.js"
import userRouter from "./routers/user.js"
import studiesRouter from "./routers/studies.js"
import { connectToDb } from "./config/db.js"
import dotenv from "dotenv"
import fs from "fs/promises"


function PrintToLog(req, res, next) {
    try {
        fs.appendFile("./log.txt", `${new Date().toLocaleDateString} ${req.method} ${req.url}`)
        next()
    }
    catch (err) {
        return res.status(400).json({ title: "error in printto log", message: err.message })
    }
}

dotenv.config()
const app = express()
connectToDb()
app.use(PrintToLog)
app.use(express.json())
app.use("/api/course", courseRouter)
app.use("/api/user", userRouter)
app.use("/api/studies",studiesRouter)

let port=process.env.PORT

app.listen(port,"localhost",()=>{
    console.log("app is listening on port "+port)
})

