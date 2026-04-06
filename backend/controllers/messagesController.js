export const getUsersController = (req, res) => {
    try{
        console.log(req)
    }catch(error){
        console.log(error)
        res.status(500).json({
            message:"Internal Server Error!"
        })
    }
}