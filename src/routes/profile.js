import { Router } from "express"

const router = Router()


router.get('/myprofile', (req, res) => {
    const fname = "John harley"
    const mname = "quipanes"
    const lname = "Aparece"
    const gender = "Male" 
    const email = "harlae116@gmail.com"
    res.status(200).send({fullname: fname+" "+mname+" "+lname, gender: gender, email,email})
})

export default router