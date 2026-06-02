import { Router } from "express";
import { MovieController } from "../controllers/movie.controller";
import { validate } from "../middlewares/validaton.middleware";
import { searchMovieSchema } from "../validators/movie.validator";

const router = Router()

const movieController = new MovieController()

router.get('/search' , validate(searchMovieSchema) , movieController.searchMovies)
router.get('/:imdbID' , movieController.getMoviesDetails)

export default router