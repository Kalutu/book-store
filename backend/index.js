import express from "express"
import mongoose from "mongoose"
import { PORT, MONGO_URI } from "./config.js"
import { router as bookRouter } from "./routes/book.js"
import cors from 'cors'
 
const app = express()
app.use(cors('*'))
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.use(express.json())

app.get('/', (req, res)=>{
    console.log(req);
    res.status(234).send('Welcome to MERN stack tutorial')
})

app.use('/api/v1/books',bookRouter)



mongoose.connect(MONGO_URI )
        .then(()=>{
            console.log('Connected to the database sucessfully')
            app.listen(PORT,()=>{
                console.log(`App is listening to port ${PORT}`);
            })
        })
        .catch(error=>console.log(error))