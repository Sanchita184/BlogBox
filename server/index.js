import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

const app = express()
const PORT = process.env.PORT || '5050'
console.log(PORT)

app.use(express.json())
app.use(cors())

connectDB();

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${process.env.PORT}`);
})