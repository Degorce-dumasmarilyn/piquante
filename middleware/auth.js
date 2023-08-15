const jwt = require("jsonwebtoken")

function authenticateUser(req, res, next){
    console.log("authenticateUser")
    const header = req.header("Authorization")
    if(header == null) return res.status(403).send({ message: "Invalid" })

    const token = header.split(" ")[1]
    if (token == null) return res.status(403).send({ message: "Token cannot be null" })
    console.log('token:', token)
    
     
    if (!token){
        res.status(403).send({message: "Invalid"})
    }
    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
        if (err) return res.status(403).send({ message: "Token invalid" + err })
        console.log("token est bien validé, on continue")
        next()
    })
}
module.exports = {authenticateUser}