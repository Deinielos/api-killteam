import express from 'express'
import cors from 'cors'

import * as usersController from "./controllers/games.controller.js";

const app = express()
const corsOptions = {
    origin: "*",
    credentials: true,
};

app.set('view engine', 'ejs')
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsOptions));

import { router as usersRouter } from "./routers/users.router.js";
import { router as gamesRouter } from "./routers/games.router.js";

app.use("/users", usersRouter)
app.use("/games", gamesRouter)


app.get('/newGame', (req, res) => {
    res.render('form')
})

app.post('/profile', usersController.addGame)

app.listen(8080, () => {
    console.log('Funciona')
})