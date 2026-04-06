export const verifyUser = async(req, res, next) => {
    try {
        const token = req.cookies.token
        console.log(token)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"UnAuthorized"
        })
    }
    
}