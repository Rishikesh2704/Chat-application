import jwt from "jsonwebtoken";
const REFRESH_TOKEN_EXP = '30'
export const createToken = async (userId, res) => {
  const token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'15m'});
  res.cookie('token', token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly:true,
    sameSite:"strict"
  })
  return token
};


export const refreshToken = async (userId, res) => {
  const refreshToken = await jwt.sign({userId}, process.env.JWT_RefreshSecret,{expiresIn: `${REFRESH_TOKEN_EXP}d`})
  const currentDate = new Date()
  const expireDate = currentDate.setDate(currentDate.getDate() + REFRESH_TOKEN_EXP)
  return {
    Token:refreshToken,
    userId:userId,
    expiresAt:expireDate
  }
}