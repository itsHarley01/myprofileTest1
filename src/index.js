import express from "express";
import ProfileRouter from './routes/profile.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('welcome')
})
 
app.use(ProfileRouter)

// const PORT = 3333
const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log('server started')
})