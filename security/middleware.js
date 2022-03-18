import jwt from "jsonwebtoken";
import { key } from "./jwt.js";

const createToken = (user) => {
  const payload = {
    name: user.name
  };
  return jwt.sign(payload, key, { expiresIn: "7d" });
};

const ensureAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          return res.status(401).send(err);
        } else {
          req.name = decoded.name;
          next();
        }
      });
    }
  } else {
    return res.status(403).send("No hay auth");
  }
};

/* const adminTest = (req,res,next) => {
  console.log(req.admin);
  if(req.admin==1) next()
  else {
    return res.status(403).send("No eres admin");
  }
} */

export { createToken, ensureAuth };
