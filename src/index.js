import express from "express";
import Data from './routes/mydata.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('welcome to my humble node express')
})
 
app.use(Data)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log('server started')
})