import express from "express";
import ProfileRouter from './routes/profile.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('welcome')
})

app.use(ProfileRouter)

// app.get('/myprofile', (req, res) => {
//     const fname = "John harley"
//     const mname = "quipanes"
//     const lname = "Aparece"
//     const gender = "Male"
//     const email = "harlae116@gmail.com"
//     res.status(200).send({fullname: fname+mname+lname, gender: gender, email,email})
// })

const PORT = 3333

app.listen(PORT, () => {
    console.log('server started')
})