import { Router } from "express";
import movieRoutes from "./movie.routes";
import favoriteRoutes from "./favorite.routes";

const router = Router()

router.use('/movies' , movieRoutes)

router.use('/favorites' , favoriteRoutes)

export default router;