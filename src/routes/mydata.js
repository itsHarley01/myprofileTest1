import { Router } from "express"

const router = Router()

const fname = "JOHN HARLEY"
const mname = "QUIPANES"
const lname = "APARECE"
const gender = "MALE" 
const age = "21"
const email = "joqu.aparece.swu@phinmaed.com"

router.get('/firstname', (req, res) => {
    res.status(200).send(fname)
})

router.get('/lastname', (req, res) => {
    res.status(200).send(lname)
})

router.get('/age', (req, res) => {
    res.status(200).send(age)
})

router.get('/schoolemail', (req, res) => {
    res.status(200).send(email)
})


router.get('/mydata', (req, res) => {
    res.status(200).send({first_name: fname, last_name: lname, age: age, school_email: email})
})

export default router