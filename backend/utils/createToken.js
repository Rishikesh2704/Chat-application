import jwt from "jsonwebtoken";

export const createToken = (userId, res) => {
  const secretKey = "1243";
  jwt.sign(userId, secretKey, (err, token) => {
    console.log("User Id:", userId);

    if (err) {
      res.status(500).send("<h2>Internal Server Error!</h2>");
      console.log(err);
    }
    res.authorization = token;
    res.send({Token:token});
  });
};
