import express from 'express';
const router = express.Router();

import { ensureAuth } from "../security/middleware.js";
import * as gamesController from "../controllers/games.controller.js";

router.get('/', ensureAuth, gamesController.getGames);
router.post('/', ensureAuth, gamesController.addGame);
router.get('/:id', gamesController.getGame);

export { router };