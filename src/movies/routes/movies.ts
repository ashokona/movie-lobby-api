import { Router } from 'express';
import {fetchMovies, addMovie, searchMovie, updateMovie, deleteMovie} from '../controller/movie';
const router = Router();

router.get('/movies', fetchMovies);
router.post('/movies', addMovie);
router.get('/search', searchMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
