import express from 'express';
import { changeStatus, createUser, deleteUserById, findAll, findUserById, updateUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', createUser)
router.get('/', findAll)
router.get('/id', findUserById)
router.put('/', updateUserById)
router.put('/status', changeStatus)
router.delete('/', deleteUserById)

export default router