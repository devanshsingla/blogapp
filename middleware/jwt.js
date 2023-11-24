const jwt = require("jsonwebtoken");

//SECRET
const secret =  "devanshiseveryonesdaddy";

const sign = (payload)=>{
    if(!payload) console.log("Input missing")
    let token = jwt.sign(payload,secret)
    return token
}

const decode = (token) =>{
    if(!token) console.log("token missing")
    let data = jwt.decode(token,secret )
    return data
}

module.exports = {
  sign,
  decode,
};