const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken')
const verifyJwtToken = async(req, res, next)=>{
    const token = req.headers.authorization || req.query.token || req.body.token;
    if (!token) {
        res.status(400).send({ success: false, message: "token not found"});
        return;
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid Token"
        })
        return;
    }
    next();
}



module.exports = verifyJwtToken