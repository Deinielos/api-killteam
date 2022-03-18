import { connection } from "../common/db.js";

const getAll = (req, res) => {
  connection.query('select * from game', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(rows);
    }
  })
}

const getGame = (req, res) => {
  connection.query(`select * from game where id = ${req.params.id}`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(rows[0]);
    }
  })
}

const getGames = (req, res) => {
  connection.query(`SELECT * FROM game WHERE game.player1 = '${req.name}' or game.player2 = '${req.name}'`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (rows == []) {
      }
      else {
        res.status(200).json(rows);
      }
    }
  })
}

const addGame = (req, res) => {
  connection.query(
    `INSERT INTO game(faction1, faction2, player1, player2, attacker, iniciative, result1, result2, mission, tacOps1, tacOps2, tacOps3, tacOps4, tacOps5, tacOps6, turns, tournament) 
    VALUES('${req.body.faction1}','${req.body.faction2}','${req.body.player1}','${req.body.player2}','${req.body.attacker}','${req.body.iniciative}',${parseInt(req.body.result1)},${parseInt(req.body.result2)},'${req.body.mission}','${req.body.tacOps1}','${req.body.tacOps2}','${req.body.tacOps3}','${req.body.tacOps4}','${req.body.tacOps5}','${req.body.tacOps6}',${parseInt(req.body.turns)},${1})`,//Este parametro es una constante porque no hay menu para añadir un torneo nuevo de momento
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(`{"message":"Partida añadido"}`);
      }
    }
  );
}

export { getAll, getGame, getGames, addGame }