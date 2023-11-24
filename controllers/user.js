const bcrypt = require('bcrypt')
const {exisitngEmail,createUser} = require('../models/user')


const createUser = async (req,res,next)=>{
    if(!req.name || !req.email ||  !req.password){
        
        return res.status(400).json({message:"input missing"})
    }

    if((req.name.length < 10) || (req.email.length < 10) ||  (req.password.length < 10)){
        return res.status(400).json({message:"length of inputs should be more than 10 characters"})
    }

    const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email.test(req.email)){
        res.status(400).json({message:"email not valid"})
    }

    let existing_email = await exisitngEmail(email)

    if(existing_email){
        res.status(400).json({message:"Email exists"})
    }
    const saltrounds = 10

    const encrypted_pass = bcrypt.hashSync(req.password , saltrounds)

    let newUser = {
        name : req.name,
        email : req.email,
        password : encrypted_pass
    }

    const result = createUser(newUser)

    return res.status(200).json({message:result})

}