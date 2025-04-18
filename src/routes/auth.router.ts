import { Router } from 'express';

import { createUser, loginUser, renewToken } from '../controllers/auth.controller.js';
import { check } from 'express-validator';
import { fieldValidator } from '../middlewares/fieldValidator.js';

const router = Router();

router.post('/new',
    [
        check('name', 'Nombre es obligatorio').not().isEmpty(),
        check('email', 'Email es obligatorio').isEmail(),
        check('password', 'Password es obligatorio y de minimo 6 caracteres').isLength({ min: 6 }),
        fieldValidator,
    ],
    createUser
)

router.post('/', 
    [
        check('email', 'Email es obligatorio').isEmail(),
        check('password', 'Password es obligatorio').isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser)

router.get('/renew', renewToken)

export default router;