const jwt = require('jsonwebtoken')


function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(401);
        req.user = user;
        next();
    })
}

module.exports = {
    authenticateToken
}

// The authenticateToken function is middleware for Express.js that 
// verifies the presence and validity of a JWT (JSON Web Token) in 
// incoming requests. It checks the Authorization header for a token, 
// validates it using a secret key, and attaches the decoded user 
// information to the request object if the token is valid. 
// If the token is missing or invalid, it responds with a 401 
// Unauthorized status, preventing access to protected routes.