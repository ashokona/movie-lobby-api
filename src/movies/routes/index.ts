import { Router, Request, Response } from 'express';
import movieRoutes from './movies';
const router = Router();
// let tasks: Movie[] = [];

// Add your CRUD API implementation here
router.use('/lobby', movieRoutes);

export default router;