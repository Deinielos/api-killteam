import { connection } from "../common/db.js";
import { createToken } from "../security/middleware.js";

const getAll = (req, res) => {
  connection.query('select * from users', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(rows);
    }
  })
}


const addUser = (req, res) => {
  connection.query(
    `INSERT INTO users (email,name,passwd,admin) VALUES ('${req.body.email}','${req.body.name}','${req.body.passwd}',0)`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(`{"message":"Usuario añadido"}`);
      }
    }
  );
}

const login = (req, res) => {
  const { name, passwd } = req.body;
  connection.query(
    `select * from users where name = "${name}"`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else if (rows.length == 0) {
        res.status(401).send({ message: 'user/password not found' });
      } else {
        const user = rows[0];
        /*  const verified = bcrypt.compareSync(passwd, user.passwd); */
        if (passwd == user.passwd) {
          const token = createToken(user);
          res.send({ token, user: { name: user.name } });
        } else {
          res.status(401).send({ message: 'user/password not found' });
        }
      }
    }
  );
};


export { getAll, addUser, login }