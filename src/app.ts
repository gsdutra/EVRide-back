import express from 'express';
import cors from 'cors';
import {Request, Response} from 'express';

const app = express();

app
	.use(cors())
	.use(express.json())
	.use('/health', (req: Request, res: Response)=>res.send('OK'));

export default app;