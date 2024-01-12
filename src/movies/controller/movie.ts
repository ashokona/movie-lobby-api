import { Request, Response } from 'express';
import Movie from '../models/movie';

const fetchMovies = async (req: Request, res: Response) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }   
}

const addMovie = async (req: Request, res: Response) => { 
    try {
        const movie = new Movie(req.body);
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

const searchMovie = async (req: Request, res: Response) => {
    try {
        const q = req.query.q;
        const movies = await Movie.find({ $or: [{ title: { $regex: q, $options: "i" } }, { genre: { $regex: q, $options: "i" } }] });
        res.status(200).json(movies);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

const updateMovie = async (req: Request, res: Response) => { 
    try {
        const id = req.params.id;
        const movie = await Movie.updateOne({ _id: id }, req.body);
        res.status(200).json(movie);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

const deleteMovie = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const movie = await Movie.deleteOne({ _id: id });
        res.status(200).json(movie);
    } catch(err: any) {
        res.status(400).json({ message: err.message });
    }
}

export {fetchMovies, addMovie, searchMovie, updateMovie, deleteMovie};