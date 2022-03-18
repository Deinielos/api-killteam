import express from 'express';
const router = express.Router();


import * as usersController from "../controllers/users.controller.js";

router.get('/', usersController.getAll);
router.post('/login', usersController.login);
router.post('/signUp', usersController.addUser)

export { router };
