import express from 'express';
import { addUser, createBootcamp, findAll, findById } from '../controllers/bootcamp.controller.js';

const router = express.Router();

router.post('/', createBootcamp);
router.get('/', findAll);
router.get('/id', findById);
router.post('/vinculate', addUser)

export default router