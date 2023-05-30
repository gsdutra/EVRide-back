import express from 'express';
import cors from 'cors';
import {Request, Response} from 'express';
import * as r from './routers';

const app = express();

app
	.use(cors())
	.use(express.json())
	.use('/health', (req: Request, res: Response)=>res.send('OK'))
	.use('/auth', r.authRouter);

export default app;