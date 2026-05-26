import { Router } from "express";
import { FavoriteController } from "../controllers/favorite.controller";
import { validate } from "../middlewares/validaton.middleware";
import { favoriteMovieSchema } from "../validators/favorite.validator";
import { guestMiddleware } from "../middlewares/guest.middleware";

const router = Router()

const favoriteController = new FavoriteController()

router.get('/' , guestMiddleware , favoriteController.getFavorites)

router.post('/' , guestMiddleware , validate(favoriteMovieSchema) , favoriteController.addFavorite)

router.delete('/:imdbID' , guestMiddleware , favoriteController.removeFavorite)

export default router