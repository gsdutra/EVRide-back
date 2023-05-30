import * as authController from '@/controllers/auth-controller';

import { Router } from 'express';

const authRouter = Router();

authRouter
	.post('/signup', authController.createUser)
	.post('/signin', authController.createUser);

export {authRouter};